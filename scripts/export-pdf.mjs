// Generates a print-ready PDF for every post, using the site's own
// @media print stylesheet (galleries expand, links spell out their URL)
// via a real headless Chromium print, so the PDF matches what the post
// actually looks like -- not a separate export path to keep in sync.
//
// Must run AFTER `astro build`. Writes into public/pdfs/ (the committed
// source of truth) and also directly into dist/pdfs/ so this build's
// output already has them without a second full `astro build`.
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { chromium } from 'playwright';

const ROOT = path.resolve(import.meta.dirname, '..');
const POSTS_DIR = path.join(ROOT, 'src', 'content', 'posts');
const DIST_DIR = path.join(ROOT, 'dist');
const PUBLIC_PDF_DIR = path.join(ROOT, 'public', 'pdfs');
const DIST_PDF_DIR = path.join(DIST_DIR, 'pdfs');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.xml': 'application/xml',
  '.pdf': 'application/pdf',
};

function getSlugs() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, ''));
}

function startStaticServer() {
  const server = http.createServer((req, res) => {
    let reqPath = decodeURIComponent(req.url.split('?')[0]);
    if (reqPath.endsWith('/')) reqPath += 'index.html';
    let filePath = path.join(DIST_DIR, reqPath);
    if (!filePath.startsWith(DIST_DIR)) {
      res.writeHead(403);
      res.end();
      return;
    }
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }
      const ext = path.extname(filePath);
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      res.end(data);
    });
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function main() {
  if (!fs.existsSync(DIST_DIR)) {
    console.error('dist/ not found -- run `npm run build` before `npm run pdf`.');
    process.exit(1);
  }
  fs.mkdirSync(PUBLIC_PDF_DIR, { recursive: true });
  fs.mkdirSync(DIST_PDF_DIR, { recursive: true });

  const server = await startStaticServer();
  const { port } = server.address();
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.emulateMedia({ media: 'print' });

  const slugs = getSlugs();
  let ok = 0;
  const failed = [];

  for (const slug of slugs) {
    const url = `http://127.0.0.1:${port}/posts/${slug}/`;
    try {
      const response = await page.goto(url, { waitUntil: 'networkidle' });
      if (!response || !response.ok()) throw new Error(`HTTP ${response ? response.status() : 'no response'}`);
      const pdfPath = path.join(PUBLIC_PDF_DIR, `${slug}.pdf`);
      await page.pdf({
        path: pdfPath,
        format: 'Letter',
        printBackground: true,
        margin: { top: '0.6in', bottom: '0.6in', left: '0.6in', right: '0.6in' },
      });
      fs.copyFileSync(pdfPath, path.join(DIST_PDF_DIR, `${slug}.pdf`));
      ok += 1;
    } catch (err) {
      failed.push({ slug, error: err.message });
    }
  }

  await browser.close();
  server.close();

  console.log(`Generated ${ok}/${slugs.length} PDFs into public/pdfs and dist/pdfs`);
  if (failed.length) {
    console.log(`${failed.length} failed:`);
    for (const f of failed) console.log(`  ! ${f.slug}: ${f.error}`);
    process.exitCode = 1;
  }
}

main();
