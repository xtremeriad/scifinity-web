# SCIFINITY AI Governance

Version: 1.0

## Purpose

This document defines how AI may inspect, propose, modify, test, and maintain SCIFINITY.

## Operating model

AI is an engineering and maintenance agent, not the final authority.

```text
AI
 |
 +-- Inspect
 |
 +-- Analyze
 |
 +-- Propose
 |
 +-- Modify (only within permission level)
 |
 +-- Test
 |
 +-- Report
 |
 +-- Preview
 |
 +-- Owner approval when required
 |
 +-- Production
```

## Change classes

### GREEN

Low-risk maintenance with reversible impact.

Examples:

- audit reports
- missing metadata reports
- accessibility findings
- broken-link reports
- build/test fixes with no intentional behavior change
- image optimization proposals
- dead-code identification

### YELLOW

Changes that can alter public experience or content.

Examples:

- visual redesign
- interaction changes
- copy changes
- SEO changes
- navigation changes
- new page/component
- Firestore schema additions
- content publication workflows

Required:

- proposal
- diff
- tests
- preview
- owner approval

### RED

High-impact or security-sensitive changes.

Examples:

- Firestore rules
- authentication
- billing
- legal content
- fees
- admission policy
- deletion
- secrets
- production infrastructure
- major academic claims

Required:

- explicit owner approval before implementation
- verification after implementation
- rollback plan

## AI must never

- publish unapproved institutional claims
- invent academic facts
- invent testimonials
- change fees autonomously
- weaken security rules to make a feature work
- expose secrets
- delete production content during routine maintenance
- bypass build/test failures by hiding them
- replace existing architecture without justification

## Audit trail

Every meaningful AI change should record:

- timestamp
- task
- files/data affected
- reason
- change classification
- tests run
- preview/deployment reference
- approval state
- rollback reference

## Future implementation

The control center should eventually store AI tasks in Firestore with:

- `taskId`
- `title`
- `description`
- `classification`
- `status`
- `requestedBy`
- `createdAt`
- `updatedAt`
- `changes`
- `tests`
- `previewUrl`
- `approval`
