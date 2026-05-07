# Performance Testing Guide

This document describes how to test and monitor the AEKS Janitorials site for performance, including page load speeds and behavior on slow connections.

---

## 1. Page Load Speed Testing

### Option A: Chrome DevTools Lighthouse

1. Open the site in Chrome (production build or `npm run preview`)
2. Open DevTools (F12) → **Lighthouse** tab
3. Select:
   - **Performance**
   - **Desktop** or **Mobile** (test both)
   - **Clear storage** (optional, for clean run)
4. Click **Analyze page load**
5. Review metrics:
   - **First Contentful Paint (FCP)** – when first content appears
   - **Largest Contentful Paint (LCP)** – main content visibility
   - **Total Blocking Time (TBT)** – responsiveness
   - **Cumulative Layout Shift (CLS)** – visual stability
   - **Speed Index** – perceived load speed

**Targets:** LCP < 2.5s, FCP < 1.8s, CLS < 0.1

### Option B: WebPageTest (webpagetest.org)

1. Enter the site URL (must be publicly accessible)
2. Choose location and device
3. Run test
4. Review waterfall, filmstrip, and metrics

---

## 2. Testing on Slow Connections

### Chrome DevTools Network Throttling

1. Open DevTools (F12) → **Network** tab
2. Use the throttling dropdown (default: "No throttling")
3. Choose a profile:
   - **Slow 3G** – ~400 Kbps down, 400 ms RTT
   - **Fast 3G** – ~1.6 Mbps down, 562.5 ms RTT
   - **Custom** – set your own limits
4. Reload the page and measure load time

### Simulating Slow Connections

| Profile | Download | Upload | Latency |
|---------|----------|--------|---------|
| Slow 3G | 400 Kbps | 400 Kbps | 2000 ms |
| Fast 3G | 1.6 Mbps | 750 Kbps | 562.5 ms |
| 4G      | 4 Mbps   | 3 Mbps | 20 ms   |

**Suggested tests:**
- Home page on Slow 3G
- Services pages (Businesses, Homeowners) on Fast 3G
- Contact page (form) on Fast 3G

---

## 3. Optimizations Already Implemented

- **Route-level lazy loading:** Home, About, Contact, ServicesHomeowners, ServicesBusinesses load only when visited
- **Gallery lazy loading:** Gallery component lazy-loaded on Home
- **Image optimization:**
  - `loading="lazy"` on below-fold and carousel images
  - `decoding="async"` for non-blocking decode
  - Unsplash images use `w`, `q`, `auto=format` for smaller sizes
- **Resource hints:** `preconnect` for fonts.googleapis.com, fonts.gstatic.com, images.unsplash.com
- **Code splitting:** Separate chunks for React, GSAP, Swiper, Lucide, EmailJS
- **Fonts:** `display=swap` to avoid invisible text
- **Build:** `target: es2020`, `sourcemap: false`, `cssCodeSplit: true`

---

## 4. Pages to Monitor

| Page | Expected Load | Notes |
|------|---------------|------|
| Home | Medium | Gallery + many sections |
| Services (Businesses) | Light | Minimal images |
| Services (Homeowners) | Light | One hero image |
| About | Medium | Swiper, Lucide icons |
| Contact | Medium | EmailJS |

---

## 5. Running Performance Tests

### Build and preview locally

```bash
npm run build
npm run preview
```

Then run Lighthouse or DevTools against `http://localhost:4173` (or the URL shown).

### Slow connection test workflow

1. Start `npm run preview`
2. Open DevTools → Network
3. Set throttling to **Slow 3G**
4. Hard refresh (Ctrl+Shift+R)
5. Note time to interactive and LCP
6. Repeat for each main route

---

## 6. Further Optimization Ideas

- Use `fetchpriority="high"` on LCP image (e.g. hero)
- Compress images and serve WebP where supported
- Add `dns-prefetch` for external domains
- Consider reducing initial GSAP/ScrollTrigger usage
- Audit and tree-shake Lucide icons (import only used icons)
