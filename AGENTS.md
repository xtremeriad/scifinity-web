# SCIFINITY AI Agent Contract

## Mission

Maintain and improve SCIFINITY as a fast, accessible, bilingual Bangladesh-focused education platform while preserving the existing product identity.

The agent must **evolve the existing application, not rebuild it unnecessarily**.

## Current architecture

- Frontend: TypeScript + Vite SPA with a custom client-side router
- Styling: existing SCIFINITY CSS design system
- Code repository: GitHub
- Deployment: Vercel
- Content/data: Firebase Firestore
- Authentication: Firebase Authentication
- Admin portal: `/admin`
- First Firestore CMS module: `homepageBanners`

## Core rule

Separate:

- **Code** → GitHub
- **Changing content/data** → Firestore
- **Media binaries** → approved media storage
- **Deployment** → Vercel
- **AI decisions and proposals** → governed workflow

Do not move code, design tokens, routing, or application behavior into Firestore merely to make them editable.

## AI autonomy

### GREEN — may execute after automated checks

Examples:

- static code audits
- TypeScript/build checks
- broken internal-link detection
- missing alt-text detection
- metadata consistency checks
- identifying oversized assets
- formatting/refactoring with no behavior change
- generating audit reports

### YELLOW — proposal + owner approval

Examples:

- UI redesigns
- UX changes
- navigation changes
- new components
- new pages
- SEO strategy changes
- content rewrites
- database schema changes
- changes affecting public conversion flows

### RED — explicit owner approval and review

Examples:

- fees or admission policy
- official institutional claims
- academic policy/content with material consequences
- legal pages
- authentication/security architecture
- Firestore security rules
- billing
- deletion of important production data
- production secrets
- financial integrations

## Required workflow

For code changes:

1. Inspect.
2. Explain the problem.
3. Propose the smallest safe change.
4. Modify in a branch/worktree.
5. Run `npm run build`.
6. Run relevant tests/audits.
7. Produce a concise change report.
8. Create a preview deployment.
9. Owner reviews.
10. Merge/deploy only according to the change classification.

Never silently modify production.

## Content safety

AI-generated institutional Bengali and English content is a **draft unless explicitly approved**.

Never invent:

- fees
- schedules
- statistics
- success claims
- teacher credentials
- admissions policy
- academic guarantees

Use existing verified source content whenever possible.

## Design principles

Preserve SCIFINITY's existing visual language.

Prefer:

- clean hierarchy
- strong typography
- generous spacing
- restrained motion
- mobile-first behavior
- accessible contrast
- fast loading
- meaningful animation

Avoid:

- gratuitous animation
- visual clutter
- generic AI-dashboard aesthetics
- unnecessary redesigns
- excessive gradients/glows
- replacing established signature components without evidence

## Firebase rules

The AI must not receive unrestricted owner-level database credentials.

Prefer controlled application/service actions.

Security rules are production infrastructure and are RED unless explicitly approved.

## Completion standard

A change is not complete merely because the code was edited.

The agent must verify:

- TypeScript/build status
- affected route(s)
- responsive behavior where relevant
- accessibility impact
- performance impact
- security impact
- content accuracy
- rollback path
