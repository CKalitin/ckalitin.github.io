// Groups images into a horizontal-scroll gallery and applies an optional
// sizing suffix from alt text:
//   |40%, |small, |medium, |large  -- relative to the article column width,
//                                     forces the image to exactly that size
//   |150%, |200%                   -- same, but over 100% breaks out of the
//                                     column so a dense chart can be read
//                                     wider than the text (capped at the
//                                     viewport, max 300%). Inside a gallery
//                                     any percent scales the row height
//                                     instead -- see --fig-scale below.
//   |h350                          -- absolute max-height in px (width auto)
//   |w600                          -- absolute max-width in px (height auto)
// With no suffix, an image renders at its own natural pixel size, scaled
// down (never up) if that would exceed the column width -- so a small
// screenshot stays small and a giant chart never overflows.
//
// The h/w forms exist to carry forward exact sizes from the old Jekyll
// site's kramdown `{: height="350" }` / `{: width="600" }` attributes,
// recovered post-by-post from git history during migration -- they're not
// really meant for new authoring (percent or no-suffix cover that better),
// but they're kept as real supported syntax rather than a one-off migration
// hack.
//
// CommonMark puts consecutive "![img](path)" lines with no blank line
// between them into ONE paragraph (separated by <br>), and an image's
// caption line ("*caption*" directly under it) into that SAME paragraph
// too (also <br>-separated) rather than a paragraph of its own. So the
// real authoring shapes to support are: one <p> with N images (typed as
// consecutive lines -- the easy way to make a gallery), and one <p> with
// a single image plus an optional trailing <em> caption (the existing
// convention every migrated post already uses). Runs of adjacent
// image-only paragraphs (blank line between images) are merged too, as a
// secondary case.

const PERCENT_RE = /\|\s*(small|medium|large|\d{1,3}%?)\s*$/i;
const PIXEL_RE = /\|\s*([hw])(\d{2,4})\s*$/i;
const SIZE_PRESETS = { small: 33, medium: 60, large: 85 };
// Over 100% is a real authoring mode, not a mistake: a dense chart that's
// legible at full resolution is unreadable squeezed into the article
// column, so |150%/|200% deliberately breaks out of the column (see
// .fig-wide in post.css). Capped well below the point where the viewport
// cap would be doing all the work anyway.
const MAX_PERCENT = 300;

function resolvePercent(raw) {
  const lower = raw.toLowerCase();
  if (lower in SIZE_PRESETS) return SIZE_PRESETS[lower];
  const num = parseInt(raw, 10);
  return Number.isNaN(num) ? 100 : Math.min(MAX_PERCENT, Math.max(1, num));
}

function isWhitespaceText(node) {
  return node.type === 'text' && /^\s*$/.test(node.value);
}

function isBreak(node) {
  return node.type === 'element' && node.tagName === 'br';
}

function buildFigure(img, captionEm) {
  let alt = img.properties.alt || '';
  let className = ['fig'];
  let style = '';
  let pctUsed = 0;

  const pxMatch = alt.match(PIXEL_RE);
  const pctMatch = !pxMatch && alt.match(PERCENT_RE);
  if (pxMatch) {
    const axis = pxMatch[1].toLowerCase();
    const px = parseInt(pxMatch[2], 10);
    alt = alt.slice(0, pxMatch.index).trim();
    className = ['fig', axis === 'h' ? 'fig-height' : 'fig-width-px'];
    style = axis === 'h' ? `--fig-max-height: ${px}px` : `--fig-max-width-px: ${px}px`;
  } else if (pctMatch) {
    const pct = resolvePercent(pctMatch[1]);
    pctUsed = pct;
    alt = alt.slice(0, pctMatch.index).trim();
    className = pct > 100 ? ['fig', 'fig-width', 'fig-wide'] : ['fig', 'fig-width'];
    // --fig-pct drives width in the normal column flow; --fig-scale is the
    // same number as a unitless multiplier, which is what a gallery needs
    // (its items are sized by height, and calc() can't multiply a length
    // by a percentage). Emitting both keeps one authored `|140%` meaning
    // "40% bigger than default" in either context.
    style = `--fig-pct: ${pct}%; --fig-scale: ${pct / 100}`;
  }

  img.properties.alt = alt;
  img.properties.loading = 'lazy';
  img.properties.decoding = 'async';

  const children = [img];
  if (captionEm) {
    children.push({
      type: 'element',
      tagName: 'figcaption',
      properties: {},
      children: captionEm.children,
    });
  }

  return {
    type: 'element',
    tagName: 'figure',
    properties: { className, style },
    // `data` is unist scratch space -- it never reaches the HTML. The
    // gallery builder needs each figure's percentage to size the strip
    // itself, and re-parsing it back out of the style string would be
    // silly.
    data: pctUsed ? { figPct: pctUsed } : undefined,
    children,
  };
}

// Returns an array of figure nodes if `node` is a paragraph made up
// entirely of images (+ optional captions), or null otherwise.
function extractFigures(node) {
  if (!node || node.type !== 'element' || node.tagName !== 'p') return null;
  const children = node.children;
  const figures = [];
  let i = 0;
  while (i < children.length) {
    const child = children[i];
    if (isWhitespaceText(child) || isBreak(child)) {
      i += 1;
      continue;
    }
    if (child.type === 'element' && child.tagName === 'img') {
      i += 1;
      while (i < children.length && (isWhitespaceText(children[i]) || isBreak(children[i]))) i += 1;
      let caption = null;
      if (
        i < children.length &&
        children[i].type === 'element' &&
        (children[i].tagName === 'em' || children[i].tagName === 'i')
      ) {
        // <em> comes from markdown *italics*; <i> from raw HTML captions
        // (several posts hand-wrote <i><a href=...>...</a></i> captions
        // with embedded links, e.g. an "Expanded Image" link) -- both are
        // real captions, not just markdown-emitted ones.
        caption = children[i];
        i += 1;
        while (i < children.length && (isWhitespaceText(children[i]) || isBreak(children[i]))) i += 1;
      }
      figures.push(buildFigure(child, caption));
      continue;
    }
    // Anything else (plain text, a link, etc.) means this isn't a pure
    // media paragraph -- leave it completely untouched.
    return null;
  }
  return figures.length > 0 ? figures : null;
}

function processChildren(children) {
  const out = [];
  let i = 0;
  while (i < children.length) {
    const node = children[i];
    const figures = extractFigures(node);
    if (figures) {
      const collected = figures.slice();
      i += 1;
      while (i < children.length) {
        const more = extractFigures(children[i]);
        if (!more) break;
        collected.push(...more);
        i += 1;
      }
      if (collected.length >= 2) {
        // A percentage inside a gallery has to size the STRIP, not the
        // item: the strip is a fixed-width scroller, so growing an item
        // inside it just crops the item at the same column edge. The
        // largest percentage in the run wins, and the strip breaks out of
        // the column by that much (with the items scaled to match), which
        // is what actually makes the images bigger on screen.
        const pct = Math.max(0, ...collected.map((f) => (f.data && f.data.figPct) || 0));
        const wide = pct > 100;
        out.push({
          type: 'element',
          tagName: 'div',
          properties: {
            className: wide ? ['gallery', 'gallery-wide'] : ['gallery'],
            style: pct ? `--fig-pct: ${pct}%; --fig-scale: ${pct / 100}` : undefined,
          },
          children: collected,
        });
      } else {
        out.push(collected[0]);
      }
      continue;
    }
    if (node.children) {
      node.children = processChildren(node.children);
    }
    out.push(node);
    i += 1;
  }
  return out;
}

export default function rehypeFigures() {
  return (tree) => {
    tree.children = processChildren(tree.children);
  };
}
