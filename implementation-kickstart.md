# Vane & Co. Wealth Management - Implementation Kickstart

## Project Overview

A premium, dark-themed landing page for Vane & Co. Wealth Management, a boutique fee-only advisory firm. This is a **frontend-only prototype** with no backend logic, state management, or data persistence.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| Animations | Framer Motion (subtle only) |
| Icons | Lucide React |
| Font | Inter (single font family) |

---

## Design System

### Color Palette (5 colors max)

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#0A0A0A` | Page background |
| `--foreground` | `#FAFAFA` | Primary text |
| `--muted` | `#171717` | Card backgrounds, sections |
| `--muted-foreground` | `#A1A1AA` | Secondary text |
| `--accent` | `#2D5A27` | CTA buttons, highlights, links |

### Typography

- **Font Family:** Inter (via `next/font/google`)
- **Headings:** `font-semibold` or `font-bold`
- **Body:** `font-normal`, `leading-relaxed`
- **Single font family throughout** - no secondary fonts

### Visual Effects

- **Glassmorphism:** Applied to header and select cards
  - `backdrop-blur-md`
  - `bg-white/5` or `bg-black/20`
  - `border border-white/10`
- **Animations:** Framer Motion
  - Entrance animations on scroll (fade-up)
  - Hover effects on buttons/cards
  - No heavy motion - premium minimal feel

---

## Page Structure & Sections

```
┌─────────────────────────────────────────────┐
│  HEADER (sticky, glassmorphism)             │
│  - Logo (left)                              │
│  - Nav links (center/right)                 │
│  - Mobile: Burger menu                      │
├─────────────────────────────────────────────┤
│  HERO SECTION                               │
│  - Headline + Subheadline                   │
│  - Primary CTA button                       │
│  - Trust indicators below                   │
├─────────────────────────────────────────────┤
│  TRUST BAR                                  │
│  - SEC / CFA / CFP / Forbes logos           │
│  - Grayscale, subtle presentation           │
├─────────────────────────────────────────────┤
│  FOUNDER SPOTLIGHT                          │
│  - Julian Vane introduction                 │
│  - Placeholder image                        │
│  - Credentials & philosophy                 │
├─────────────────────────────────────────────┤
│  ROADMAP / PROCESS                          │
│  - 4-step process cards                     │
│  - Glassmorphism cards                      │
│  - Icons for each step                      │
├─────────────────────────────────────────────┤
│  SERVICES / FEATURES                        │
│  - Tax Planning, Estate, Insurance Review   │
│  - Card grid layout                         │
├─────────────────────────────────────────────┤
│  TESTIMONIALS                               │
│  - 2-3 testimonial cards                    │
│  - Placeholder avatars                      │
│  - Roles: retired physician, business owner │
├─────────────────────────────────────────────┤
│  FAQ ACCORDION                              │
│  - White-glove service question             │
│  - Boutique firm question                   │
│  - Portfolio size question                  │
├─────────────────────────────────────────────┤
│  FINAL CTA SECTION                          │
│  - Compelling closer headline               │
│  - Single CTA button                        │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  - Firm details                             │
│  - Social icons                             │
│  - Legal disclaimer                         │
└─────────────────────────────────────────────┘
```

---

## Component Architecture

### File Structure

```
app/
├── layout.tsx              # Root layout, fonts, metadata
├── page.tsx                # Main page (imports all sections)
├── globals.css             # Design tokens, global styles

components/
├── layout/
│   ├── header.tsx          # Sticky header with glassmorphism
│   ├── mobile-nav.tsx      # Mobile burger menu + drawer
│   └── footer.tsx          # Footer with legal disclaimer
│
├── sections/
│   ├── hero.tsx            # Hero section
│   ├── trust-bar.tsx       # Logo/credential bar
│   ├── founder.tsx         # Julian Vane spotlight
│   ├── roadmap.tsx         # 4-step process
│   ├── services.tsx        # Service cards
│   ├── testimonials.tsx    # Social proof
│   ├── faq.tsx             # Accordion FAQ
│   └── final-cta.tsx       # Bottom CTA section
│
├── ui/
│   └── (shadcn components) # Button, Card, Dialog, Accordion, etc.
│
└── contact-modal.tsx       # Modal contact form (no submission logic)
```

### Line Limits

- **Target:** 400-600 lines max per file
- **Strategy:** Each section is its own component file
- **page.tsx:** Only imports and composes sections (~50-100 lines)

---

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | `< 640px` | Single column, burger menu, stacked layout |
| Tablet | `640px - 1024px` | 2-column grids where appropriate |
| Desktop | `> 1024px` | Full layout, horizontal nav |

### Mobile-Specific

- **Header:** Burger menu icon → opens drawer/sheet
- **Navigation:** Full-screen or slide-in drawer
- **CTA:** Consistent sizing, touch-friendly (min 44px tap target)
- **Cards:** Stack vertically
- **NO fixed bottom bar** (simplified for prototype)

---

## Animation Strategy

### Entrance Animations (Framer Motion)

```tsx
// Fade up on scroll into view
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}
```

### Hover Effects

- **Buttons:** Slight scale (`scale-105`) + brightness
- **Cards:** Subtle lift (`translateY(-4px)`) + shadow increase
- **Links:** Color transition to accent

### Rules

- All animations < 500ms duration
- Use `prefers-reduced-motion` media query support
- No auto-playing animations, loops, or heavy motion

---

## CTA Strategy

### Single CTA Pattern

- **Button Text:** "Book Your Free Financial Review"
- **Action:** Opens `<Dialog>` modal with contact form
- **Form Fields (display only, no submission):**
  - Name
  - Email
  - Phone (optional)
  - Brief message
- **On "Submit":** Show success message in modal (no actual submission)

### Smooth Scroll

- Nav links scroll to sections smoothly
- "Back to top" behavior enabled

---

## SEO & Metadata

```tsx
// app/layout.tsx
export const metadata: Metadata = {
  title: "Vane & Co. Wealth Management | Fee-Only Financial Advisory",
  description: "Boutique fee-only wealth management for clients with $250K–$5M portfolios. Personalized tax planning, estate strategies, and fiduciary advice.",
  openGraph: {
    title: "Vane & Co. Wealth Management",
    description: "Fee-only fiduciary wealth management",
    type: "website",
  },
}
```

### Semantic HTML

- Use `<header>`, `<main>`, `<section>`, `<footer>`
- Proper heading hierarchy (`h1` → `h2` → `h3`)
- Alt text on all images
- ARIA labels on interactive elements

---

## Content Outline

### Hero Section

- **Headline:** "Your Wealth. Your Legacy. One Trusted Partner."
- **Subheadline:** "Fee-only fiduciary advice for families with $250K–$5M portfolios."
- **CTA:** "Book Your Free Financial Review"

### Trust Bar

- SEC Registered
- CFA Charterholder
- CFP Certified
- "As Seen In Forbes" (placeholder)

### Founder Spotlight

- **Name:** Julian Vane, CFA, CFP
- **Tone:** Warm, confident, approachable
- **Content:** Brief bio, philosophy, credentials

### Roadmap (4 Steps)

1. **Discovery Call** - Understand your goals
2. **Custom Plan** - Tailored strategy
3. **Implementation** - Execute with precision
4. **Ongoing Support** - Continuous optimization

### Services

- Comprehensive Tax Planning
- Estate & Legacy Planning
- Insurance Review & Optimization
- Retirement Income Strategy

### Testimonials

1. Retired Physician - "Finally, an advisor who listens..."
2. Business Owner - "Julian simplified everything..."

### FAQ

1. "What does 'white-glove service' mean?"
2. "How is a boutique firm different?"
3. "What portfolio size do you work with?"

### Final CTA

- **Headline:** "Ready to Take Control of Your Financial Future?"
- **CTA:** "Book Your Free Financial Review"

---

## Implementation Order

### Phase 1: Foundation
1. Update `globals.css` with design tokens
2. Update `layout.tsx` with Inter font + metadata
3. Create `header.tsx` with glassmorphism + mobile nav
4. Create `footer.tsx`

### Phase 2: Core Sections
5. Create `hero.tsx`
6. Create `trust-bar.tsx`
7. Create `founder.tsx`
8. Create `roadmap.tsx`

### Phase 3: Supporting Sections
9. Create `services.tsx`
10. Create `testimonials.tsx`
11. Create `faq.tsx`
12. Create `final-cta.tsx`

### Phase 4: Interactivity
13. Create `contact-modal.tsx`
14. Wire up CTA buttons to modal
15. Add smooth scroll navigation
16. Add Framer Motion animations

### Phase 5: Polish
17. Responsive testing & adjustments
18. Accessibility audit (contrast, focus states)
19. Final review

---

## Dependencies to Install

```bash
pnpm add framer-motion
```

Note: shadcn/ui, Tailwind, Lucide React are already in the starter template.

---

## Placeholder Assets

All images use placeholder approach:
- **Founder photo:** `/placeholder.svg?height=400&width=400`
- **Testimonial avatars:** `/placeholder.svg?height=64&width=64`
- **Trust logos:** Text-based badges or simple SVG icons

---

## Out of Scope (Frontend Prototype)

- No form submission logic
- No backend API routes
- No database integration
- No email notifications
- No authentication
- No state management libraries

---

## Ready to Build

This plan covers all architectural decisions. The next step is to begin implementation following the Phase order above.

**Awaiting approval to proceed with code implementation.**
