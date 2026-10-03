#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const args = new Set(process.argv.slice(2));
const PUBLIC = path.join(ROOT, 'public');
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, '.scifinity', 'audit');

const findings = [];
const metrics = {};

function addFinding({ severity, category, title, evidence, recommendation, changeClass = 'GREEN' }) {
  findings.push({ severity, category, title, evidence, recommendation, changeClass });
}

async function exists(file) {
  try { await fs.access(file); return true; } catch { return false; }
}

async function walk(dir, out = []) {
  if (!(await exists(dir))) return out;
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist', '.scifinity/audit'].some(x => entry.name === x)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else out.push(full);
  }
  return out;
}

function rel(file) {
  return path.relative(ROOT, file).replaceAll('\\', '/');
}

function severityWeight(s) {
  return { CRITICAL: 4, HIGH: 3, MEDIUM: 2, LOW: 1, INFO: 0 }[s] ?? 0;
}

async function readText(file) {
  try { return await fs.readFile(file, 'utf8'); } catch { return ''; }
}

async function auditAssets() {
  const files = await walk(PUBLIC);
  const assets = files.filter(f => /\.(png|jpe?g|webp|gif|svg|avif)$/i.test(f));
  metrics.assetCount = assets.length;
  const large = [];
  const hashes = new Map();

  for (const file of assets) {
    const stat = await fs.stat(file);
    const mb = stat.size / 1024 / 1024;
    if (mb >= 5) large.push({ file: rel(file), bytes: stat.size, mb: Number(mb.toFixed(2)) });

    if (stat.size > 0 && stat.size <= 100 * 1024 * 1024) {
      const data = await fs.readFile(file);
      const key = `${stat.size}:${data.subarray(0, 64).toString('base64')}:${data.subarray(-64).toString('base64')}`;
      const list = hashes.get(key) ?? [];
      list.push(rel(file));
      hashes.set(key, list);
    }
  }

  metrics.largeAssets = large;
  if (large.length) {
    for (const a of large.sort((x, y) => y.bytes - x.bytes).slice(0, 10)) {
      addFinding({
        severity: a.mb >= 20 ? 'CRITICAL' : a.mb >= 10 ? 'HIGH' : 'MEDIUM',
        category: 'Performance',
        title: `Large web asset: ${a.file}`,
        evidence: `${a.mb} MB`,
        recommendation: 'Create a web-optimized delivery asset and keep the original master outside the public delivery path.',
        changeClass: 'YELLOW'
      });
    }
  }

  const duplicates = [...hashes.values()].filter(v => v.length > 1);
  metrics.duplicateAssetGroups = duplicates;
  for (const group of duplicates) {
    addFinding({
      severity: 'MEDIUM',
      category: 'Performance',
      title: 'Potential duplicate assets',
      evidence: group.join(', '),
      recommendation: 'Verify whether the files are byte-for-byte duplicates and keep one optimized delivery asset where appropriate.',
      changeClass: 'YELLOW'
    });
  }
}

async function auditSource() {
  const files = (await walk(SRC)).filter(f => /\.(ts|tsx|js|jsx|css|html)$/i.test(f));
  let inlineStyles = 0;
  let innerHtml = 0;
  let filesWithInnerHtml = 0;
  let placeholderHits = 0;
  const placeholderFiles = new Set();

  for (const file of files) {
    const text = await readText(file);
    const styleMatches = text.match(/\bstyle\s*=\s*["'`]/g) ?? [];
    inlineStyles += styleMatches.length;
    const htmlMatches = text.match(/\.innerHTML\s*=/g) ?? [];
    innerHtml += htmlMatches.length;
    if (htmlMatches.length) filesWithInnerHtml++;

    const placeholders = text.match(/PLACEHOLDER|COMING_SOON|REVIEW_REQUIRED|TODO|FIXME/gi) ?? [];
    placeholderHits += placeholders.length;
    if (placeholders.length) placeholderFiles.add(rel(file));
  }

  metrics.sourceFiles = files.length;
  metrics.inlineStyleDeclarations = inlineStyles;
  metrics.innerHtmlAssignments = innerHtml;
  metrics.filesUsingInnerHTML = filesWithInnerHtml;
  metrics.placeholderMarkers = placeholderHits;

  if (inlineStyles > 200) {
    addFinding({
      severity: 'MEDIUM',
      category: 'Design',
      title: 'High number of inline style declarations',
      evidence: `${inlineStyles} inline style declarations found in source`,
      recommendation: 'Gradually move repeated visual rules into the existing SCIFINITY design system; do not perform a blind rewrite.',
      changeClass: 'YELLOW'
    });
  }

  if (innerHtml > 0) {
    addFinding({
      severity: 'HIGH',
      category: 'Security',
      title: 'innerHTML assignments require content-boundary review',
      evidence: `${innerHtml} assignments across ${filesWithInnerHtml} source files`,
      recommendation: 'Ensure Firestore/user-controlled content is escaped or sanitized before reaching innerHTML.',
      changeClass: 'RED'
    });
  }

  if (placeholderHits > 0) {
    addFinding({
      severity: 'LOW',
      category: 'Content',
      title: 'Placeholder/review markers detected',
      evidence: `${placeholderHits} marker occurrences in ${placeholderFiles.size} files`,
      recommendation: 'Review markers before publishing affected content.',
      changeClass: 'YELLOW'
    });
  }
}

async function auditSEO() {
  const seoFile = path.join(SRC, 'utils', 'seo.ts');
  const robots = path.join(PUBLIC, 'robots.txt');
  const sitemap = path.join(PUBLIC, 'sitemap.xml');
  metrics.seoUtilityPresent = await exists(seoFile);
  metrics.robotsPresent = await exists(robots);
  metrics.sitemapPresent = await exists(sitemap);

  if (!(await exists(seoFile))) addFinding({ severity: 'HIGH', category: 'SEO', title: 'SEO utility not found', evidence: 'src/utils/seo.ts is missing', recommendation: 'Add centralized metadata handling before expanding dynamic pages.', changeClass: 'YELLOW' });
  if (!(await exists(robots))) addFinding({ severity: 'MEDIUM', category: 'SEO', title: 'robots.txt not found', evidence: 'public/robots.txt is missing', recommendation: 'Add a valid robots.txt appropriate for the public site.', changeClass: 'YELLOW' });
  if (!(await exists(sitemap))) addFinding({ severity: 'MEDIUM', category: 'SEO', title: 'sitemap.xml not found', evidence: 'public/sitemap.xml is missing', recommendation: 'Maintain a valid sitemap for public routes.', changeClass: 'YELLOW' });
}

async function auditPackage() {
  const file = path.join(ROOT, 'package.json');
  if (!(await exists(file))) return;
  const pkg = JSON.parse(await readText(file));
  metrics.packageName = pkg.name;
  metrics.scripts = Object.keys(pkg.scripts ?? {});
  metrics.dependencies = Object.keys(pkg.dependencies ?? {}).length;
  metrics.devDependencies = Object.keys(pkg.devDependencies ?? {}).length;
  if (!pkg.scripts?.build) addFinding({ severity: 'HIGH', category: 'Build', title: 'No build script found', evidence: 'package.json has no build script', recommendation: 'Provide a deterministic production build command for automation.', changeClass: 'YELLOW' });
}

async function runBuild() {
  if (!args.has('--build')) return;
  try {
    execSync('npm run build', { cwd: ROOT, stdio: 'pipe', encoding: 'utf8' });
    metrics.build = 'PASS';
  } catch (error) {
    metrics.build = 'FAIL';
    const output = `${error.stdout ?? ''}\n${error.stderr ?? ''}`.trim().slice(-4000);
    addFinding({ severity: 'HIGH', category: 'Build', title: 'Production build failed', evidence: output || 'npm run build failed', recommendation: 'Fix the build failure before any automated code deployment.', changeClass: 'YELLOW' });
  }
}

function renderMarkdown() {
  const counts = Object.fromEntries(['CRITICAL','HIGH','MEDIUM','LOW','INFO'].map(s => [s, findings.filter(f => f.severity === s).length]));
  const lines = [
    '# SCIFINITY Website Audit',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    '## Summary',
    '',
    `- Critical: ${counts.CRITICAL}`,
    `- High: ${counts.HIGH}`,
    `- Medium: ${counts.MEDIUM}`,
    `- Low: ${counts.LOW}`,
    `- Info: ${counts.INFO}`,
    '',
    '## Findings',
    ''
  ];
  if (!findings.length) lines.push('No findings were produced by the deterministic checks.');
  for (const f of findings.sort((a,b) => severityWeight(b.severity)-severityWeight(a.severity))) {
    lines.push(`### ${f.severity} — ${f.category}: ${f.title}`);
    lines.push(`- Evidence: ${f.evidence}`);
    lines.push(`- Recommendation: ${f.recommendation}`);
    lines.push(`- Change class: ${f.changeClass}`);
    lines.push('');
  }
  lines.push('## Metrics', '', '```json', JSON.stringify(metrics, null, 2), '```', '');
  return lines.join('\n');
}

await fs.mkdir(OUT, { recursive: true });
await auditAssets();
await auditSource();
await auditSEO();
await auditPackage();
await runBuild();

const report = {
  generatedAt: new Date().toISOString(),
  findings: findings.sort((a,b) => severityWeight(b.severity)-severityWeight(a.severity)),
  metrics
};

await fs.writeFile(path.join(OUT, 'audit.json'), JSON.stringify(report, null, 2));
await fs.writeFile(path.join(OUT, 'audit.md'), renderMarkdown());

console.log(`SCIFINITY audit complete: ${findings.length} findings`);
for (const severity of ['CRITICAL','HIGH','MEDIUM','LOW','INFO']) {
  const count = findings.filter(f => f.severity === severity).length;
  if (count) console.log(`${severity}: ${count}`);
}
console.log(`Reports: .scifinity/audit/audit.md and .scifinity/audit/audit.json`);
