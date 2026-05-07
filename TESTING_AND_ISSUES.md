# Links & Buttons Testing + Documented Issues

## Test checklist: links and buttons

Use this list when manually testing the site. Check each item and note pass/fail or any bug.

---

### Header
| Item | Target | Expected | Result |
|------|--------|----------|--------|
| Logo | Home | Goes to `/` | |
| Nav: Home | Home | Goes to `/` | |
| Nav: Services | Services | Goes to `/services` | |
| Nav: About | About | Goes to `/about` | |
| Nav: Contact | Contact | Goes to `/contact` | |
| Get Quote (desktop) | Contact | Goes to `/contact` | |
| Menu toggle (mobile) | — | Opens/closes mobile nav | |
| Mobile nav links | Same as desktop | Each goes to correct page and closes menu | |
| Mobile Get Quote | Contact | Goes to `/contact`, closes menu | |

### Skip link
| Item | Target | Expected | Result |
|------|--------|----------|--------|
| Skip to main content | `#main-content` | Visible on focus, moves focus to main | |

---

### Home page
| Item | Target | Expected | Result |
|------|--------|----------|--------|
| Hero: Get Your Free Quote | Contact | Goes to `/contact` | |
| Hero: View Our Services | Services | Goes to `/services` | |
| Why Choose: Learn More About Us | About | Goes to `/about` | |
| Process: Get Your Free Quote | Contact | Goes to `/contact` | |
| Gallery slide (click) | — | Opens lightbox | |
| Gallery: Prev/Next arrows | — | Changes slide | |
| Gallery: Dot indicators | — | Jumps to that slide | |
| Lightbox: Close | — | Closes modal | |
| Lightbox: Prev/Next | — | Changes image | |
| Lightbox: Click backdrop | — | Closes modal | |

---

### Services page
| Item | Target | Expected | Result |
|------|--------|----------|--------|
| Business card (click) | — | Expands/collapses details | |
| Business: Get Your Free Quote Today | Contact | Goes to `/contact` | |
| Residential card (click) | — | Expands/collapses details | |
| Residential: Get Your Free Quote | Contact | Goes to `/contact` | |

---

### About page
| Item | Target | Expected | Result |
|------|--------|----------|--------|
| Get Your Free Quote | Contact | Goes to `/contact` | |
| Testimonials carousel | — | Auto-advances, pagination works | |

---

### Contact page
| Item | Target | Expected | Result |
|------|--------|----------|--------|
| Submit: Get Your Free Quote | — | Submits form, shows success/error | |
| Submit when loading | — | Button disabled, "Sending..." | |

---

### Footer
| Item | Target | Expected | Result |
|------|--------|----------|--------|
| Office Cleaning | Services | Goes to `/services` | |
| Residential Cleaning | Services | Goes to `/services` | |
| Commercial Cleaning | Services | Goes to `/services` | |
| Deep Cleaning | Services | Goes to `/services` | |
| About Us | About | Goes to `/about` | |
| Our Team | About | Goes to `/about` | |
| Careers | About | Goes to `/about` | |
| Contact | Contact | Goes to `/contact` | |
| Social: Facebook | External | Opens Facebook (placeholder URL) | |
| Social: Twitter | External | Opens Twitter (placeholder URL) | |
| Social: Instagram | External | Opens Instagram (placeholder URL) | |

---

## Documented bugs / issues

### Fixed
- **Services page CTAs:** The two "Get Your Free Quote" links on the Services page (business and residential sections) used `<a href="/contact">`, which caused a full page reload. They were updated to use React Router `<Link to="/contact">` for consistent client-side navigation.

### Known / to verify
- **Contact form:** Requires EmailJS (or Formspree) credentials in env or code. If not set, form submit will fail; see `EMAILJS_SETUP.md`.
- **Footer social links:** Point to generic facebook.com, twitter.com, instagram.com. Replace with real profile URLs when available.
- **Testimonial images (Home):** Use `https://via.placeholder.com/48`. Consider replacing with real or better placeholder images.
- **Gallery images:** Use Unsplash URLs. Works offline only if cached; ensure network available or swap to local assets if needed.

### Optional improvements
- **Footer "Our Team" / "Careers":** Both go to `/about`. Add separate routes or scroll-to-section if you add those sections later.
- **Keyboard:** Expandable cards on Services support Enter/Space; Gallery lightbox supports Escape and arrow keys. Manually verify with keyboard-only navigation.

---

## How to run a quick test

1. `npm run dev`
2. Open http://localhost:5173
3. Work through the checklist above (header → each page → footer).
4. Test on a narrow viewport for mobile menu and responsive layout.
5. Update the "Result" column and add any new issues to "Documented bugs / issues" above.
