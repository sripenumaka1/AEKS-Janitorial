# Accessibility (WCAG) – Implementation Summary

This project includes accessibility improvements aimed at **WCAG 2.1 Level AA** compliance.

## What Was Implemented

### 1. Alt text for images
- **Home (testimonials):** Alt text is `"[Name], [Role]"` (e.g. "Sarah Johnson, Office Manager").
- **About (testimonials):** Same pattern for client photos.
- **Gallery:** Each image uses descriptive alt from `image.title`; modal image uses the same.
- **Header & Footer logos:** Alt text is "AEKS Janitorials".
- Decorative elements (e.g. hero arrow SVG) use `aria-hidden="true"`.

### 2. Keyboard navigation
- **Skip link:** "Skip to main content" is the first focusable element; it appears on focus and links to `#main-content`.
- **Main content:** `<main id="main-content" tabIndex={-1}>` so it can receive focus after the skip link.
- **Hero CTAs:** "Get Free Quote" and "Our Services" are `<Link>` components so they’re keyboard and screen-reader friendly.
- **Services (business cards):** Each card is focusable (`tabIndex={0}`), has `role="button"`, and responds to **Enter** and **Space** to expand/collapse.
- **Gallery:** Previous/Next and indicator buttons are focusable; modal closes with **Escape** and supports **Arrow Left/Right** inside the modal.
- **Focus visible:** All interactive elements use a clear focus ring (white + green) via `:focus-visible` (see `App.css`).

### 3. Screen reader support
- **Landmarks:** Sections use `aria-labelledby` pointing to their heading `id` (e.g. Why Choose, How It Works, Testimonials, Gallery, About).
- **Header:** Main nav has `aria-label="Main navigation"`; mobile menu button has `aria-expanded` and `aria-controls="mobile-nav"`; mobile panel has `aria-hidden` when closed.
- **Footer:** Services and Company link groups are in `<nav>` with `aria-label`.
- **Gallery:** Region has `aria-roledescription="carousel"` and `aria-label="Image gallery"`; slide indicators use `role="tablist"` and each has `aria-label="Slide N of M"` and `aria-selected`.
- **Lightbox:** Dialog has `role="dialog"`, `aria-modal="true"`, and `aria-label="Image lightbox"`; buttons have clear labels (e.g. "Close lightbox", "Previous image").
- **Contact form:** Status message has `role="alert"` and `aria-live="polite"`; submit button has `aria-busy` when submitting.

### 4. Color contrast
- **`--text-light`** was updated from `#9ca3af` to `#6b7280` so body text meets WCAG AA (about 4.5:1 on white).
- Focus rings use a 2px white outline plus 4px green so they remain visible on light backgrounds.

## How to Test

### Keyboard-only
1. Use **Tab** / **Shift+Tab** to move focus; confirm the skip link appears when focused.
2. Activate all links and buttons with **Enter** (and **Space** for the Services business cards).
3. In the Gallery, use the slide buttons and indicators; open the lightbox and use **Escape** and arrow keys.
4. Confirm focus is always visible and never trapped (except intentionally in the modal).

### Screen readers
- **NVDA (Windows):** Turn on NVDA, navigate with Tab and arrow keys; listen for headings, landmarks, and button/link names.
- **VoiceOver (macOS):** Enable VoiceOver (Cmd+F5), use VO+arrow keys and VO+space to activate; check that sections and controls are announced correctly.
- **Mobile:** Test with TalkBack (Android) or VoiceOver (iOS) to confirm touch targets and labels.

### Automated checks
- **Lighthouse (Chrome DevTools):** Run the Accessibility audit and address any remaining issues.
- **axe DevTools:** Install the axe extension and run a scan on each main page.

## Optional next steps
- Add a visible focus order or “Focus mode” for very long pages if needed.
- Consider `prefers-reduced-motion` to tone down or disable animations for users who request it.
