import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeFigures from './src/lib/rehype-figures.mjs';
import rehypeExternalLinks from './src/lib/rehype-external-links.mjs';

export default defineConfig({
  site: 'https://ckalitin.github.io',
  trailingSlash: 'ignore',
  markdown: {
    remarkPlugins: [remarkMath],
    // Astro only resolves raw inline HTML (<i>, <a href>, etc.) into real
    // hast elements *after* the user's own rehypePlugins run -- without
    // running rehype-raw ourselves first, any post's hand-written HTML
    // (raw <i> captions, raw <a> links) is still literal unparsed text
    // when rehypeFigures/rehypeExternalLinks see it, so neither plugin
    // can find or touch it.
    rehypePlugins: [rehypeRaw, rehypeKatex, rehypeFigures, rehypeExternalLinks],
  },
});
