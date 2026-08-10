// Groups images into a horizontal-scroll gallery and applies an optional
// sizing suffix from alt text:
//   |40%, |small, |medium, |large  -- relative to the article column width,
//                                     forces the image to exactly that size
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

function resolvePercent(raw) {
  const lower = raw.toLowerCase();
  if (lower in SIZE_PRESETS) return SIZE_PRESETS[lower];
  const num = parseInt(raw, 10);
  return Number.isNaN(num) ? 100 : Math.min(100, Math.max(1, num));
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
    alt = alt.slice(0, pctMatch.index).trim();
    className = ['fig', 'fig-width'];
    style = `--fig-pct: ${pct}%`;
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
        out.push({
          type: 'element',
          tagName: 'div',
          properties: { className: ['gallery'] },
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
