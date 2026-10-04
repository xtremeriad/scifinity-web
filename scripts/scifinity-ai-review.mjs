import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import { GeminiAIModelAdapter } from "../src/services/ai/providers/geminiAdapter.ts";

dotenv.config({ path: ".env.local" });

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

function markdownFromReview(review) {
  const lines = [];

  lines.push("# SCIFINITY AI Review");
  lines.push("");
  lines.push(`Generated: ${review.generatedAt}`);
  lines.push(`Provider: ${review.modelProvider}`);
  lines.push(`Model: ${review.modelName}`);
  lines.push(`Review version: ${review.reviewVersion}`);
  lines.push("");

  lines.push("## Summary");
  lines.push("");
  lines.push(`- Total findings: ${review.summary.total}`);
  lines.push(`- GREEN: ${review.summary.green}`);
  lines.push(`- YELLOW: ${review.summary.yellow}`);
  lines.push(`- RED: ${review.summary.red}`);
  lines.push("");

  lines.push("## Findings");
  lines.push("");

  if (review.findings.length === 0) {
    lines.push("No structured findings were returned by the AI model.");
    lines.push("");
  }

  for (const finding of review.findings) {
    lines.push(`### ${finding.id} — ${finding.title}`);
    lines.push("");

    lines.push(`- Severity: ${finding.severity}`);
    lines.push(`- Governance class: **${finding.governanceClass}**`);
    lines.push(`- Approval: **${finding.approval}**`);
    lines.push(`- Confidence: ${finding.confidence}`);
    lines.push(`- Status: ${finding.status}`);
    lines.push("");

    lines.push("**Evidence**");
    lines.push("");
    lines.push(finding.evidence || "No evidence supplied.");
    lines.push("");

    lines.push("**Impact**");
    lines.push("");
    lines.push(finding.impact || "Not established.");
    lines.push("");

    lines.push("**Root cause**");
    lines.push("");
    lines.push(finding.rootCause || "Not established.");
    lines.push("");

    lines.push("**Existing recommendation**");
    lines.push("");
    lines.push(
      finding.existingRecommendation || "No existing recommendation supplied."
    );
    lines.push("");

    lines.push("**Risk**");
    lines.push("");
    lines.push(finding.risk || "Not established.");
    lines.push("");

    lines.push("**Recommended action**");
    lines.push("");
    lines.push(finding.recommendedAction || "No action proposed.");
    lines.push("");

    lines.push("**Affected files**");
    lines.push("");

    if (finding.affectedFiles.length === 0) {
      lines.push("None specified.");
    } else {
      for (const file of finding.affectedFiles) {
        lines.push(`- ${file}`);
      }
    }

    lines.push("");

    lines.push("**Proposed changes**");
    lines.push("");

    if (finding.proposedChanges.length === 0) {
      lines.push("None proposed.");
    } else {
      for (const change of finding.proposedChanges) {
        lines.push(`- ${change}`);
      }
    }

    lines.push("");

    lines.push("**Validation plan**");
    lines.push("");

    if (finding.validationPlan.length === 0) {
      lines.push("No validation plan supplied.");
    } else {
      for (const step of finding.validationPlan) {
        lines.push(`- ${step}`);
      }
    }

    lines.push("");
    lines.push("---");
    lines.push("");
  }

  lines.push("## Governance");
  lines.push("");
  lines.push(
    "This AI review is advisory. It does not modify source code or deploy changes."
  );
  lines.push("");

  return lines.join("\n");
}

async function main() {
  console.log("SCIFINITY AI Review starting...");
  console.log("Provider: Gemini");

  const audit = readJson(AUDIT_JSON);

  const input = {
    audit: readText(AUDIT_MD),
    auditJson: audit,
    governance: readText(GOVERNANCE),
    designConstitution: readText(DESIGN),
    auditChecklist: readText(CHECKLIST),
    agents: readText(AGENTS)
  };

  const missingSources = Object.entries({
    audit: input.audit,
    governance: input.governance,
    designConstitution: input.designConstitution,
    auditChecklist: input.auditChecklist,
    agents: input.agents
  })
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missingSources.length > 0) {
    throw new Error(
      `Required governance material is missing or empty: ${missingSources.join(", ")}`
    );
  }

  const adapter = new GeminiAIModelAdapter();

  const review = await adapter.review(input);

  if (!review.generatedAt) {
    review.generatedAt = new Date().toISOString();
  }

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
  console.log(`Provider: ${review.modelProvider}`);
  console.log(`Model: ${review.modelName}`);
  console.log(`Findings reviewed: ${review.summary.total}`);
  console.log(`GREEN: ${review.summary.green}`);
  console.log(`YELLOW: ${review.summary.yellow}`);
  console.log(`RED: ${review.summary.red}`);
  console.log("");
  console.log(`Report: ${path.relative(ROOT, OUTPUT_MD)}`);
  console.log(`JSON:   ${path.relative(ROOT, OUTPUT_JSON)}`);
}

main().catch((error) => {
  console.error("");
  console.error("SCIFINITY AI Review failed.");
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});