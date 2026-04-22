# Vane & Co. - Build Architecture & Phase Reference

Use this document to tell AI which phase to focus on for debugging, updates, or rebuilding.

---

## Quick Reference

| Phase | Focus Area | Files |
|-------|-----------|-------|
| 1 | Foundation | `globals.css`, `layout.tsx` |
| 2 | Layout Shell | `header.tsx`, `mobile-nav.tsx`, `footer.tsx` |
| 3 | Hero & Trust | `hero.tsx`, `trust-bar.tsx` |
| 4 | Content Sections | `founder.tsx`, `roadmap.tsx`, `services.tsx` |
| 5 | Social Proof | `testimonials.tsx`, `faq.tsx` |
| 6 | Conversion | `final-cta.tsx`, `contact-modal.tsx` |
| 7 | Assembly | `page.tsx` |
| 8 | Contact Page | `app/contact/page.tsx` |

---

## Phase 1: Foundation (Design System)

**Purpose:** Establish the visual foundation - colors, typography, base styles.

**Files:**
- `app/globals.css` - Design tokens, color palette, glassmorphism utility
- `app/layout.tsx` - Inter font, metadata, viewport settings

**Design Tokens:**
```css
--background: #0A0A0A   /* Page background */
--foreground: #FAFAFA   /* Primary text */
--muted: #171717        /* Card backgrounds */
--muted-foreground: #A1A1AA  /* Secondary text */
--accent: #2D5A27       /* CTA buttons, highlights */
```

**To rebuild Phase 1:**
> "Rebuild Phase 1 - update the design system in globals.css and layout.tsx with the Vane & Co. dark theme and Inter font."

---

## Phase 2: Layout Shell (Header/Footer)

**Purpose:** Create the persistent layout components that appear on every page.

**Files:**
- `components/layout/header.tsx` - Sticky glassmorphism header with nav
- `components/layout/mobile-nav.tsx` - Mobile burger menu with Sheet drawer
- `components/layout/footer.tsx` - Footer with links, contact, legal

**Key Features:**
- Header: Sticky positioning, glassmorphism effect, desktop nav links
- Mobile: Burger icon triggers Sheet component with nav links
- Footer: 4-column grid, social icons, legal disclaimer

**To rebuild Phase 2:**
> "Rebuild Phase 2 - recreate the header with glassmorphism, mobile navigation drawer, and footer components."

---

## Phase 3: Hero & Trust Bar

**Purpose:** First impression - the hero section and credibility bar.

**Files:**
- `components/sections/hero.tsx` - Full-height hero with CTA
- `components/sections/trust-bar.tsx` - Credential badges (SEC, CFA, CFP, Forbes)

**Key Features:**
- Hero: Large headline, subheadline, primary CTA button, trust indicators
- Trust Bar: Horizontal badge row, muted styling
- Animation: Fade-up entrance on hero content

**To rebuild Phase 3:**
> "Rebuild Phase 3 - recreate the hero section with headline, CTA button, and the trust bar with credential badges."

---

## Phase 4: Content Sections

**Purpose:** Core value proposition - founder intro, process, services.

**Files:**
- `components/sections/founder.tsx` - Julian Vane spotlight
- `components/sections/roadmap.tsx` - 4-step process cards
- `components/sections/services.tsx` - Service offering cards

**Key Features:**
- Founder: Image + bio layout, credentials highlight
- Roadmap: 4 glassmorphism cards with numbered steps
- Services: 4-card grid with icons and descriptions

**To rebuild Phase 4:**
> "Rebuild Phase 4 - recreate the founder spotlight, 4-step roadmap process, and services grid sections."

---

## Phase 5: Social Proof

**Purpose:** Build trust through testimonials and answer objections with FAQ.

**Files:**
- `components/sections/testimonials.tsx` - Client testimonial cards
- `components/sections/faq.tsx` - Accordion FAQ section

**Key Features:**
- Testimonials: Quote cards with avatar, name, role
- FAQ: shadcn Accordion, 5 questions

**To rebuild Phase 5:**
> "Rebuild Phase 5 - recreate the testimonials section with client quotes and the FAQ accordion."

---

## Phase 6: Conversion

**Purpose:** Final CTA and contact modal for lead capture UI.

**Files:**
- `components/sections/final-cta.tsx` - Bottom conversion section
- `components/contact-modal.tsx` - Dialog with contact form

**Key Features:**
- Final CTA: Compelling headline + centered CTA button
- Contact Modal: Form fields (name, email, phone, message), success state
- No actual form submission - frontend prototype only

**To rebuild Phase 6:**
> "Rebuild Phase 6 - recreate the final CTA section and contact modal with form fields."

---

## Phase 7: Assembly

**Purpose:** Wire everything together in the main page.

**Files:**
- `app/page.tsx` - Imports and composes all sections

**Structure:**
```tsx
<main>
  <Header />
  <Hero />
  <TrustBar />
  <Founder />
  <Roadmap />
  <Services />
  <Testimonials />
  <FAQ />
  <FinalCTA />
  <Footer />
  <ContactModal />
</main>
```

**To rebuild Phase 7:**
> "Rebuild Phase 7 - update page.tsx to properly import and compose all sections."

---

## Phase 8: Contact Page

**Purpose:** Dedicated contact page with inline form, contact info, CTA section, and footer.

**Files:**
- `app/contact/page.tsx` - Full contact page with form, info cards, and CTA

**Key Features:**
- Inline contact form (not modal) with glassmorphism card
- Contact information with icons (address, phone, email, hours)
- "What to Expect" info box
- Alternate CTA section with call/email buttons
- Reuses Footer component

**To rebuild Phase 8:**
> "Rebuild Phase 8 - recreate the contact page at app/contact/page.tsx with inline form, contact info, and CTA section."

---

## Component Dependencies

```
page.tsx
├── layout/header.tsx
│   └── layout/mobile-nav.tsx
├── sections/hero.tsx
│   └── contact-modal.tsx (via context)
├── sections/trust-bar.tsx
├── sections/founder.tsx
├── sections/roadmap.tsx
├── sections/services.tsx
├── sections/testimonials.tsx
├── sections/faq.tsx
├── sections/final-cta.tsx
│   └── contact-modal.tsx (via context)
├── layout/footer.tsx
└── contact-modal.tsx (state managed in page.tsx)
```

---

## Debugging by Phase

### If header/navigation breaks:
> "Focus on Phase 2 - check header.tsx and mobile-nav.tsx for issues."

### If hero section breaks:
> "Focus on Phase 3 - check hero.tsx for layout or animation issues."

### If modal doesn't open:
> "Focus on Phase 6 - check contact-modal.tsx and how it's wired to CTA buttons."

### If styles look wrong:
> "Focus on Phase 1 - verify globals.css design tokens and layout.tsx font setup."

### If page is blank or 404:
> "Focus on Phase 7 - verify page.tsx exists and imports are correct."

---

## File Size Reference

| File | Lines | Purpose |
|------|-------|---------|
| globals.css | ~80 | Design tokens, utilities |
| layout.tsx | ~60 | Root layout, fonts, SEO |
| header.tsx | ~95 | Sticky header |
| mobile-nav.tsx | ~105 | Mobile drawer nav |
| footer.tsx | ~130 | Footer |
| hero.tsx | ~100 | Hero section |
| trust-bar.tsx | ~45 | Credential badges |
| founder.tsx | ~90 | Founder spotlight |
| roadmap.tsx | ~95 | Process steps |
| services.tsx | ~100 | Service cards |
| testimonials.tsx | ~90 | Social proof |
| faq.tsx | ~85 | FAQ accordion |
| final-cta.tsx | ~55 | Bottom CTA |
| contact-modal.tsx | ~195 | Modal + form |
| page.tsx | ~45 | Page assembly |
| app/contact/page.tsx | ~415 | Contact page |

---

## Rollback Strategy

If you need to rebuild from scratch:

1. **Start with Phase 1** - Get design system working first
2. **Add Phase 2** - Verify header/footer render correctly
3. **Add Phase 3** - Hero should be visible
4. **Continue sequentially** - Each phase builds on previous

To isolate a broken component, comment it out in `page.tsx` and rebuild that phase independently.
