# Cross-Browser & Device Testing Checklist

Use this checklist to verify the AEKS Janitorials site works correctly across browsers and devices.

---

## Desktop Browsers

### Chrome (latest)
- [ ] Home page loads; hero typewriter and animations run
- [ ] Rotating services bar scrolls smoothly
- [ ] Business Services cards expand/collapse on click
- [ ] Why Choose, Process, Testimonials sections animate on scroll
- [ ] Gallery slideshow advances; lightbox opens on slide click
- [ ] Navigation: Home, Services, About, Contact work
- [ ] Contact form submits; success/error message shows
- [ ] Scrollbar styling appears (green thumb)
- [ ] No console errors (F12 → Console)

### Firefox (latest)
- [ ] Same checks as Chrome
- [ ] Scrollbar uses thin green style (scrollbar-color)
- [ ] No layout shifts or missing fonts
- [ ] Form submission works

### Safari (macOS, latest)
- [ ] Same checks as Chrome
- [ ] Hero gradient text (“Cleaning You Trust”) displays correctly
- [ ] Animations (GSAP) run smoothly
- [ ] Fonts load (Montserrat, Roboto)
- [ ] No WebKit-specific console warnings

### Microsoft Edge (latest)
- [ ] Same checks as Chrome
- [ ] Layout and animations match Chrome
- [ ] Form and navigation work

---

## Mobile Devices

### iOS (Safari – iPhone)
- [ ] Viewport correct; no horizontal scroll
- [ ] Header and nav (hamburger) work
- [ ] Hero and rotating bar readable and tappable
- [ ] Service cards expand on tap
- [ ] Gallery: swipe or arrows; lightbox opens and closes
- [ ] Buttons/links have comfortable tap targets (min 44px)
- [ ] No gray tap highlight (tap-highlight removed)
- [ ] Safe area: content not hidden by notch/home indicator
- [ ] Contact form: keyboard and submit work
- [ ] Scroll behavior smooth

### Android (Chrome)
- [ ] Same as iOS where applicable
- [ ] Viewport and font scaling correct
- [ ] Touch targets adequate
- [ ] Form submission and messages work
- [ ] No overflow or layout breaks in portrait/landscape

---

## Common Issues & Fixes

| Issue | Browser/Device | Fix / Check |
|-------|----------------|------------|
| Gradient text invisible | Safari | Uses `-webkit-background-clip: text` and `color: transparent` fallback |
| Scrollbar default look | Firefox | `scrollbar-width` and `scrollbar-color` on `html` |
| Tap highlight on links | iOS/Android | `-webkit-tap-highlight-color: transparent` on body |
| Content under notch | iOS | `viewport-fit=cover` and `env(safe-area-inset-*)` on body |
| Small tap targets | Mobile | `min-height: 44px` on buttons (pointer: coarse) |
| GSAP/ScrollTrigger errors | Any | Ensure GSAP and ScrollTrigger are loaded; check console |

---

## Quick Test Commands

1. **Start dev server**
   ```bash
   npm run dev
   ```

2. **Build for production** (test built output)
   ```bash
   npm run build
   npm run preview
   ```

3. **Test on real devices**
   - Use same LAN: run `npm run dev`, find your machine IP (e.g. `192.168.1.x`), open `http://<IP>:5173` on phone.
   - Or deploy to a staging URL and test from devices.

---

## Sign-Off

| Tester | Chrome | Firefox | Safari | Edge | iOS | Android |
|--------|--------|---------|--------|------|-----|--------|
|        |        |         |        |      |     |        |

Note: Fixes applied in code (vendor prefixes, Firefox scrollbar, safe areas, tap highlight, touch targets) reduce browser-specific issues; this checklist confirms behavior on each platform.
