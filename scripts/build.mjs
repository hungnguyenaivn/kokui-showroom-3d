// Wraps the model page (van-phong-3d.html, written as a page fragment) into a standalone
// index.html for static hosting (Vercel). Run: node scripts/build.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(root, 'van-phong-3d.html'), 'utf8');

const marker = '<div id="stage">';
const at = src.indexOf(marker);
if (at < 0) throw new Error(`Marker ${marker} not found in van-phong-3d.html`);

const head = src.slice(0, at).trim();
const body = src.slice(at).trim();

const html = `<!doctype html>
<html lang="vi">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<style>
  :root { padding-top: env(safe-area-inset-top, 0px); padding-bottom: env(safe-area-inset-bottom, 0px); }
  body { margin: 0; font: 14px/1.4 system-ui, sans-serif; }
  [hidden] { display: none !important; }
</style>
${head}
</head>
<body>
${body}
</body>
</html>
`;

writeFileSync(join(root, 'index.html'), html);
console.log(`index.html written (${html.length} bytes)`);
