# Christopher Kalitin Blog

Astro-based static blog. This README is the authoring guide — everything you need to write, preview, and publish a post.

## Prerequisites

- [Node.js](https://nodejs.org) (LTS). Verify with `node --version` / `npm --version`.
- Once cloned: `npm install`.

## Writing a post

1. Create a file at `src/content/posts/YYYY-MM-DD-your-slug.md` (the date prefix and slug both matter — the date drives sort order/byline, the slug becomes the URL: `/posts/your-slug/`).
2. Frontmatter:

   ```yaml
   ---
   title: "Your Post Title"
   date: 2026-08-08
   tags:
     - Ideas
   image: /assets/images/your-slug/cover.png   # optional, used for social share previews
   ---
   ```

   `tags` is the real taxonomy — it controls which column(s) the post shows up in on the homepage grid. Current tags in use: `Space Industry Analysis`, `Techno Economic Modelling`, `Projects`, `Ideas`, `Drafts`. A post can carry more than one tag; if `Drafts` is one of them, it's grouped under Drafts regardless of the others.

3. Write the body as normal markdown below the frontmatter.

Word count, byline date formatting, and the post's URL are all computed automatically at build time — nothing else to fill in.

## Real-time preview while writing

```bash
npm run dev
```

Open `http://localhost:4321` (or the specific post: `http://localhost:4321/posts/your-slug/`) in a browser tab next to your editor. Every time you save the `.md` file, the page hot-reloads showing the actual final styling — fonts, spacing, rendered math, image galleries — not a generic markdown preview.

## Math (KaTeX, Obsidian-compatible)

Paste directly from Obsidian — same delimiters:

- Inline: `$E = mc^2$`
- Display (its own block): `$$\int_0^1 x^2\,dx = \frac{1}{3}$$`

Rendered at build time, so it works without JavaScript and shows up correctly in PDFs too.

Note: a literal `$` used for money (e.g. `$500`) is fine and won't be mistaken for math — the migration script escaped all currency dollar signs in the old posts, and as long as you don't have a *second* unescaped `$` later in the same paragraph that could pair with it, new posts are safe by default. If you ever see stray text swallowed between two dollar amounts, escape the `$` as `\$`.

## Images

**Basic — same as before:**
```markdown
![a caption](/assets/images/your-slug/photo.png)
```
Renders at the image's own natural pixel size, scaled down (never up) if it's wider than the reading column. A small screenshot stays small and sharp; a big chart never overflows. Caption is optional (drop the second line if you don't want one).

**Relative sizing** — force an image to a specific fraction of the column width, with a `|` in the alt text:
```markdown
![a caption|40%](/assets/images/your-slug/photo.png)
```
`|40%` means 40% of the text column (not the full screen), and — unlike the default — this *will* upscale a small image to hit that size. Any number 1–100 works. `small` / `medium` / `large` are shorthand for 33% / 60% / 85%. On phones this collapses back to full column width. In printed PDFs this is also forced to full width, since a percentage of the screen doesn't translate to a sensible print size.

**Absolute pixel sizing** — cap height or width in real pixels, e.g. to match a size you had in mind:
```markdown
![a caption|h350](/assets/images/your-slug/photo.png)
![a caption|w600](/assets/images/your-slug/photo.png)
```
`|h350` caps the image at 350px tall (width follows automatically to keep the aspect ratio); `|w600` caps it at 600px wide the same way. Only one dimension is ever fixed — the other is always automatic — so it can't ever come out squashed or stretched, and it still shrinks further on a narrow phone screen if needed. This is what post migration used to carry forward exact sizes from the old Jekyll site's kramdown `{: height="..." }` attributes.

**Horizontal scroller / gallery** — fully automatic, no special syntax. Just put multiple images one after another with no other text between them:
```markdown
![fig 1|small](/assets/images/your-slug/a.png)
![fig 2|small](/assets/images/your-slug/b.png)
![fig 3|small](/assets/images/your-slug/c.png)
```
Two or more images in a row (with or without captions, with or without a blank line between them) automatically become a horizontal-scroll gallery. A single standalone image just renders normally.

Where images live: `public/assets/images/<slug>/...` — reference them in markdown as `/assets/images/<slug>/filename.png` (root-relative).

## Appearances page

Podcasts, interviews, etc. shown at `/appearances/` are just rows in `src/data/appearances.yaml`:

```yaml
- date: 2026-01-15
  link: https://example.com/episode
  text: Guest on Example Podcast, episode 42 — talked about reflector economics.
```

Add an entry, no code changes needed.

## PDF export

Every post gets a PDF at `/pdfs/<slug>.pdf`, generated automatically during the deploy build (see below) — nothing to do manually. To generate them locally (e.g. to check one before pushing):

```bash
npm run build   # PDFs are generated from the built site
npm run pdf
```
First time only, install the headless browser used to generate them: `npm run pdf:install`.

## Deploying

Deploy is fully automatic: **every push to `master` triggers `.github/workflows/deploy.yml`**, which builds the site, regenerates all PDFs, and publishes to GitHub Pages. Feature branches don't trigger it. Check the **Actions** tab on GitHub to watch a run or see why one failed.

To test a full production build locally before pushing:
```bash
npm run build
npm run preview   # serves the built dist/ at localhost:4321
```

## Repo layout

```
src/content/posts/*.md     the actual blog posts (this is what you edit)
src/data/appearances.yaml  the Appearances page data
src/pages/                 site routes (home, chronological, appearances, post template, 404)
src/layouts/                page/post shells
src/components/            header
src/styles/tokens.css      colors, fonts, type scale, breakpoints -- the site's whole "theme" in one file
src/lib/                   shared logic (word count, tag/URL helpers, the gallery + math rehype plugins)
public/                    static files served as-is (images, PDFs, .nojekyll)
scripts/migrate-posts.mjs  one-time Jekyll->Astro migration script (kept for reference, not part of normal authoring)
scripts/export-pdf.mjs     the PDF generation script
```

## Changing site-wide formatting

`src/styles/tokens.css` is the single config file for colors, fonts, and font sizes — every other stylesheet reads from its CSS custom properties. Change a value there and it applies everywhere.
