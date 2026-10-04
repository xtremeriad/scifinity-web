# SCIFINITY AI Decision Log

This document records owner decisions on AI-generated website review findings.

AI recommendations are advisory. Owner decisions recorded here govern implementation.

---

## F-004 — innerHTML assignments

### Decision

**APPROVED WITH NARROWED SCOPE**

The owner reviewed the AI-generated RED recommendation and the affected source code.

The current implementation does not justify a broad replacement of `innerHTML`, because:

- The main router renders trusted application-generated HTML.
- The Admin Banner renderer escapes dynamic Firestore-derived values with `escapeHtml()`.
- Banner titles, image URLs, banner types, and IDs are escaped before HTML interpolation.
- No arbitrary rich HTML field is currently accepted.
- Public rendering of banner CTA URLs is not currently implemented.

### Required future security boundary

Before expanding Firestore-driven public content, SCIFINITY should establish reusable CMS input validation for structured fields.

At minimum:

- Plain-text fields must have type and length validation.
- URLs must be validated for allowed protocols.
- Enum fields must be restricted to approved values.
- Numeric fields must have appropriate range validation.
- Dynamic values rendered into HTML must remain HTML-escaped.
- Arbitrary HTML must not be accepted by CMS fields by default.

If future SCIFINITY content requires rich HTML, a separately governed sanitization pipeline must be introduced and explicitly approved.

### Implementation decision

Do NOT:

- Replace the application-wide `innerHTML` architecture.
- Install a global HTML sanitizer solely because of F-004.
- Rewrite the router.
- Automatically modify the five existing `innerHTML` sites.

The next appropriate engineering task is to introduce reusable CMS input/schema validation, including safe URL validation, before additional Firestore content is exposed publicly.

### Governance

Original AI classification:

- Severity: HIGH
- Governance: RED
- Approval: OWNER_REQUIRED
- Confidence: 0.95

Owner decision:

- RED finding reviewed by owner.
- Broad remediation rejected as unnecessary.
- Narrowed security-boundary work approved for a future controlled implementation.
- No automatic implementation authorized by this finding.

### Status

**DECIDED — NO IMMEDIATE CODE CHANGE**

---