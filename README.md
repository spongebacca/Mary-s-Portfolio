# Mary's Portfolio

Product design portfolio. Plain static HTML/CSS/JS — no build step, no dependencies.

## Structure

```
index.html              Home: hero, selected work, about teaser
about.html              About / experience / links
404.html                Not-found page
work/
  project-one.html      Full case-study template (copy this for new projects)
  project-two.html
  project-three.html
assets/
  css/styles.css        All styling. Design tokens are the :root variables at the top.
  js/main.js            Tiny progressive enhancement (footer year, active nav). Site works without it.
  img/                  Images go here (see naming below)
favicon.svg
robots.txt  sitemap.xml
vercel.json             Hosting config for Vercel
```

## Editing

Everything marked `[like this]`, `YOUR-DOMAIN.com`, `YOUR-HANDLE`, "Mary Lastname",
or "Replace with…" is a placeholder. Search the repo for those and replace.

**Global find-and-replace before launch:**
- `Mary Lastname` → real name
- `YOUR-DOMAIN.com` → real domain
- `mary@YOUR-DOMAIN.com` → real email
- `YOUR-HANDLE` → LinkedIn / read.cv handles
- `[your focus area]`, `[X] years`, `[industry / product type]`, etc. → real copy

The header and footer markup is duplicated in each HTML file (no templating). If you
change nav links, update every page.

### Adding a case study

1. Copy `work/project-one.html` to `work/your-slug.html`
2. Update `<title>`, meta tags, canonical URL, and the case content
3. Add a `<a class="work-card">` block on `index.html`
4. Add the URL to `sitemap.xml`
5. Fix the prev/next links in `.case-nav`

### Images

Put them in `assets/img/<project-slug>/`. Optimize before committing (aim < 300 KB each;
export at 2× the display size). Replace the `.placeholder-media` / `.thumb` divs with:

```html
<img src="/assets/img/project-one/cover.png" alt="Describe what the image shows" width="1600" height="1000">
```

Always write real `alt` text and include `width`/`height` to avoid layout shift.

### Résumé

Drop the PDF at `assets/mary-lastname-resume.pdf` (matches the links already in the HTML),
or update the links.

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
