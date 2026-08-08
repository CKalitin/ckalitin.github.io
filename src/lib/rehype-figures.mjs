// Groups images into a horizontal-scroll gallery and applies a sizing
// suffix from alt text: an explicit percentage (|40%) of the article's
// reading column width, or one of the small/medium/large shorthands.
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

const SIZE_RE = /\|\s*(small|medium|large|\d{1,3}%?)\s*$/i;
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
  let pct = 100;
  const m = alt.match(SIZE_RE);
  if (m) {
    pct = resolvePercent(m[1]);
    alt = alt.slice(0, m.index).trim();
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
    properties: { className: ['fig'], style: `--fig-pct: ${pct}%` },
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
      if (i < children.length && children[i].type === 'element' && children[i].tagName === 'em') {
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
