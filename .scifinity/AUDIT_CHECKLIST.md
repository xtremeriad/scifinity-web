# SCIFINITY Website Audit Checklist

Version: 1.0

The first AI automation capability is **audit before modification**.

## 1. Build health

- [ ] TypeScript/build succeeds
- [ ] no new compiler warnings/errors
- [ ] production bundle generated

## 2. Routes

- [ ] all registered routes render
- [ ] no obvious broken internal routes
- [ ] admin routes remain protected

## 3. Content

- [ ] no placeholder text accidentally published
- [ ] no invented institutional claims
- [ ] bilingual fields are present where required
- [ ] important factual content has an appropriate verification state

## 4. SEO

- [ ] title exists
- [ ] meta description exists
- [ ] canonical behavior is correct
- [ ] heading hierarchy is reasonable
- [ ] important images have alt text
- [ ] robots/sitemap remain valid

## 5. Accessibility

- [ ] interactive elements are keyboard reachable
- [ ] focus is visible
- [ ] images have meaningful alt text
- [ ] buttons/links have understandable labels
- [ ] color is not the only state indicator
- [ ] reduced-motion behavior is considered

## 6. Performance

- [ ] identify very large assets
- [ ] identify duplicate assets
- [ ] identify oversized JavaScript bundles
- [ ] identify unnecessary network requests
- [ ] avoid blocking resources where practical

## 7. UX

- [ ] primary action is clear
- [ ] navigation is predictable
- [ ] mobile layout is usable
- [ ] forms provide useful feedback
- [ ] empty/error/loading states are understandable

## 8. Design consistency

- [ ] existing design tokens are reused
- [ ] typography remains consistent
- [ ] spacing remains consistent
- [ ] signature components remain intact unless intentionally changed
- [ ] no unnecessary one-off styling is introduced

## 9. Security

- [ ] no secrets in source
- [ ] Firestore rules are not weakened
- [ ] untrusted Firestore content is not blindly inserted into `innerHTML`
- [ ] admin actions remain authenticated

## 10. AI change report

Every automated run should eventually produce:

- findings
- severity
- evidence
- recommended action
- change class
- whether approval is required
