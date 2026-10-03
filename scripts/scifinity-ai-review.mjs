import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const AUDIT_JSON = path.join(ROOT, ".scifinity", "audit", "audit.json");
const AUDIT_MD = path.join(ROOT, ".scifinity", "audit", "audit.md");
const GOVERNANCE = path.join(ROOT, ".scifinity", "AI_GOVERNANCE.md");
const DESIGN = path.join(ROOT, ".scifinity", "DESIGN_CONSTITUTION.md");
const CHECKLIST = path.join(ROOT, ".scifinity", "AUDIT_CHECKLIST.md");
const AGENTS = path.join(ROOT, "AGENTS.md");

const OUTPUT_DIR = path.join(ROOT, ".scifinity", "ai-review");
const OUTPUT_MD = path.join(OUTPUT_DIR, "review.md");
const OUTPUT_JSON = path.join(OUTPUT_DIR, "review.json");

function readText(file) {
  if (!fs.existsSync(file)) {
    return "";
  }

  return fs.readFileSync(file, "utf8");
}

function readJson(file) {
  if (!fs.existsSync(file)) {
    throw new Error(`Required file not found: ${file}`);
  }

  return JSON.parse(fs.readFileSync(file, "utf8"));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function classifyFinding(finding) {
  const text = JSON.stringify(finding).toLowerCase();

  if (
    text.includes("innerhtml") ||
    text.includes("security") ||
    text.includes("xss")
  ) {
    return {
      governanceClass: "RED",
      approval: "OWNER REQUIRED",
      reason: "Security/content-boundary issue requires explicit human review."
    };
  }

  if (
    text.includes("asset") ||
    text.includes("performance") ||
    text.includes("inline style") ||
    text.includes("placeholder")
  ) {
    return {
      governanceClass: "YELLOW",
      approval: "OWNER REVIEW",
      reason: "The issue may affect presentation, content, or architecture."
    };
  }

  return {
    governanceClass: "YELLOW",
    approval: "OWNER REVIEW",
    reason: "Default conservative classification."
  };
}

function extractFindings(audit) {
  if (Array.isArray(audit.findings)) {
    return audit.findings;
  }

  return [];
}

function buildReview(audit) {
  const findings = extractFindings(audit);

  const reviewedFindings = findings.map((finding, index) => {
    const classification = classifyFinding(finding);

    return {
      id: `F-${String(index + 1).padStart(3, "0")}`,
      severity: finding.severity ?? "UNKNOWN",
      title: finding.title ?? finding.name ?? "Unnamed finding",
      evidence: finding.evidence ?? "",
      recommendation: finding.recommendation ?? "",
      governanceClass: classification.governanceClass,
      approval: classification.approval,
      classificationReason: classification.reason,
      status: "PROPOSED"
    };
  });

  return {
    generatedAt: new Date().toISOString(),
    mode: "AI_REVIEW_FOUNDATION",
    source: {
      audit: ".scifinity/audit/audit.json",
      governance: ".scifinity/AI_GOVERNANCE.md",
      design: ".scifinity/DESIGN_CONSTITUTION.md",
      checklist: ".scifinity/AUDIT_CHECKLIST.md",
      agents: "AGENTS.md"
    },
    summary: {
      totalFindings: reviewedFindings.length,
      red: reviewedFindings.filter(
        (item) => item.governanceClass === "RED"
      ).length,
      yellow: reviewedFindings.filter(
        (item) => item.governanceClass === "YELLOW"
      ).length,
      green: reviewedFindings.filter(
        (item) => item.governanceClass === "GREEN"
      ).length
    },
    findings: reviewedFindings
  };
}

function markdownFromReview(review) {
  const lines = [];

  lines.push("# SCIFINITY AI Review");
  lines.push("");
  lines.push(`Generated: ${review.generatedAt}`);
  lines.push("");
  lines.push("## Review Mode");
  lines.push("");
  lines.push(
    "This is the Phase 2 AI Review Foundation. It analyzes the automated website audit and applies conservative governance classifications. It does not modify source code."
  );
  lines.push("");

  lines.push("## Summary");
  lines.push("");
  lines.push(`- Total findings: ${review.summary.totalFindings}`);
  lines.push(`- RED: ${review.summary.red}`);
  lines.push(`- YELLOW: ${review.summary.yellow}`);
  lines.push(`- GREEN: ${review.summary.green}`);
  lines.push("");

  lines.push("## Findings");
  lines.push("");

  if (review.findings.length === 0) {
    lines.push("No structured findings were detected in audit.json.");
    lines.push("");
  }

  for (const finding of review.findings) {
    lines.push(`### ${finding.id} — ${finding.title}`);
    lines.push("");
    lines.push(`- Severity: ${finding.severity}`);
    lines.push(`- Governance class: **${finding.governanceClass}**`);
    lines.push(`- Approval: **${finding.approval}**`);
    lines.push(`- Status: ${finding.status}`);
    lines.push("");

    if (finding.evidence) {
      lines.push("**Evidence**");
      lines.push("");
      lines.push(finding.evidence);
      lines.push("");
    }

    if (finding.recommendation) {
      lines.push("**Existing recommendation**");
      lines.push("");
      lines.push(finding.recommendation);
      lines.push("");
    }

    lines.push("**Classification reasoning**");
    lines.push("");
    lines.push(finding.classificationReason);
    lines.push("");

    lines.push("---");
    lines.push("");
  }

  lines.push("## Governing Documents");
  lines.push("");
  lines.push("- `.scifinity/AI_GOVERNANCE.md`");
  lines.push("- `.scifinity/DESIGN_CONSTITUTION.md`");
  lines.push("- `.scifinity/AUDIT_CHECKLIST.md`");
  lines.push("- `AGENTS.md`");
  lines.push("");

  lines.push("## Next Phase");
  lines.push("");
  lines.push(
    "The next stage will introduce a model adapter so an AI model can reason over this review package and produce a proposed change plan. Code modification remains approval-gated."
  );
  lines.push("");

  return lines.join("\n");
}

function main() {
  console.log("SCIFINITY AI Review starting...");

  const audit = readJson(AUDIT_JSON);

  // Load governance material now so the review package explicitly depends
  // on the SCIFINITY governance layer.
  const sourceDocuments = {
    audit: readText(AUDIT_MD),
    governance: readText(GOVERNANCE),
    design: readText(DESIGN),
    checklist: readText(CHECKLIST),
    agents: readText(AGENTS)
  };

  const review = buildReview(audit);

  review.sourceDocumentsLoaded = {
    audit: Boolean(sourceDocuments.audit),
    governance: Boolean(sourceDocuments.governance),
    design: Boolean(sourceDocuments.design),
    checklist: Boolean(sourceDocuments.checklist),
    agents: Boolean(sourceDocuments.agents)
  };

  ensureDir(OUTPUT_DIR);

  fs.writeFileSync(
    OUTPUT_JSON,
    JSON.stringify(review, null, 2),
    "utf8"
  );

  fs.writeFileSync(
    OUTPUT_MD,
    markdownFromReview(review),
    "utf8"
  );

  console.log("");
  console.log("SCIFINITY AI Review complete.");
  console.log(`Findings reviewed: ${review.summary.totalFindings}`);
  console.log(`RED: ${review.summary.red}`);
  console.log(`YELLOW: ${review.summary.yellow}`);
  console.log(`GREEN: ${review.summary.green}`);
  console.log("");
  console.log(`Report: ${path.relative(ROOT, OUTPUT_MD)}`);
  console.log(`JSON:   ${path.relative(ROOT, OUTPUT_JSON)}`);
}

main();