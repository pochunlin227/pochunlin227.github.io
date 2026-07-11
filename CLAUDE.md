# Po Chun Lin — Portfolio Website

Personal portfolio site for a Senior/Lead Product Designer. Pure static HTML/CSS/JS, no build step, no framework. Open `index.html` directly or serve with any static server.

## Structure

- `index.html` — Home: hero intro + 3 case study cards + CTA band
- `projects.html` — Projects: same 3 cards with longer descriptions
- `about.html` — About: Taipei→NY→Singapore journey (image + bio), skills chips, experience timeline (placeholders in [brackets])
- `play.html` — Play: 6 experiment tiles (placeholders)
- `booking-for-business.html` — Featured case study (self-contained: own inline CSS + base64 images, ~2MB; does NOT use style.css)
- `style.css` — shared styles for the 4 site pages only
- `assets/booking-hero.jpg` — case study card thumbnail
- `assets/journey.png` — MISSING: user must add their three-city illustration here (referenced by about.html)

## Design system

Color palette (defined in `style.css` `:root` and mirrored inside booking-for-business.html with different var names):
- Primary green `#1F5C4D`, secondary `#3A7D6B`, mist `#FAFAFB`
- Pastel cards: sand `#E9C29A`, lilac `#C9C4E3`, sky `#B7CDE3`
- Utility: ink `#1A1A1A`, gray `#6B6B6B`, black `#0F0F0F`
- Base: cream `#F4F1EC` (page bg), white, lavender `#EFF2FF`

Typography: 'Avenir Next' → system fallback stack. Radius ~20px. Site content max-width 1100px; case study content max-width 980px.

## Case study page conventions

`booking-for-business.html` layout: fixed full-width top nav (same as other pages, 1100px centered inner) + fixed left sidebar 184px (dark green, starts at top:61px below nav) containing a case-study switcher (current + 2 "coming soon" placeholders) and section links 00–06 with scroll-spy highlight. Interactive bits: scroll progress bar, reveal-on-scroll (IntersectionObserver), expense-card status chips, Flow 1/Flow 2 tabs, count-up stats. Images are base64 JPEGs cropped from the original portfolio deck PDFs.

Narrative structure (keep this voice for future case studies — decision-first, trade-offs explicit):
00 Overview → 01 Context → 02 Clarify Problems → 03 Shape Concept → 04 Explore MVP → 05 Test & Ship → 06 Impact & Reflection.

## TODO / placeholders to fill

- [ ] `assets/journey.png` — add the three-city illustration (About page)
- [ ] About page: experience timeline rows and [bracketed] bio details
- [ ] Case studies 02 & 03: replace placeholder cards on index/projects and the "coming soon" items in the case study sidebar switcher; build their pages following booking-for-business.html structure
- [ ] Play page: replace placeholder tiles with real experiments
- [ ] Consider extracting the case study's base64 images to `assets/` files to shrink the HTML

## Owner

Po Chun Lin — pochun.lin@thepacinglabs.com
