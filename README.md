# Mary's Portfolio

Product design portfolio, ported from Framer (marytruong.design). Plain static
HTML/CSS/JS — no build step, no dependencies.

## Structure

```
index.html               Home: hero, stats, selected work (4 cards), about teaser
about.html                About / experience / contact
work/
  checkout-flow.html      Live case study: Simplifying Web-to-Product Checkout
  project-one.html        Blank case-study template (copy this for the next real case study)
404.html                 Not-found page
assets/
  css/styles.css          All styling. Design tokens are the :root variables at the top.
  js/main.js              Tiny progressive enhancement (footer year, active nav). Site works without it.
  img/                   Images go here (currently unused — the live content has none)
favicon.svg
robots.txt  sitemap.xml
vercel.json              Hosting config for Vercel
```

Three of the four work-grid cards (Pricing Systems, Design System, Guided Plan
Recommendation) are marked "Coming soon" — they match the live Framer site, which
doesn't have full case studies for them yet.

### Adding the next case study

1. Copy `work/project-one.html` to `work/your-slug.html`
2. Update `<title>`, meta tags, canonical URL, and the case content
3. Swap the matching "Coming soon" card on `index.html` to a real `<a class="work-card">` link
4. Add the URL to `sitemap.xml`

### Images

Put them in `assets/img/<project-slug>/`. Optimize before committing (aim < 300 KB each;
export at 2× the display size):

```html
<img src="/assets/img/project-one/cover.png" alt="Describe what the image shows" width="1600" height="1000">
```

Always write real `alt` text and include `width`/`height` to avoid layout shift.

### Résumé

Links point at the Google Drive résumé used on the live site. Swap to a PDF committed
under `assets/` if you'd rather self-host it.

## Local preview

No server needed — open `index.html` in a browser. For clean local URLs, any static
server works, e.g. Python:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Deploy (Vercel)

1. Push to `main` on GitHub.
2. In Vercel: **Add New → Project → import `spongebacca/Mary-s-Portfolio`**.
   Framework preset: **Other**. Build command: none. Output directory: `.` (root).
3. Deploy. Every push to `main` redeploys automatically.
4. **Domain:** Vercel → Project → Settings → Domains → add your domain, then follow
   Vercel's DNS instructions at your registrar (an `A` record to `76.76.21.21`, or a
   `CNAME` to `cname.vercel-dns.com` for a subdomain).
