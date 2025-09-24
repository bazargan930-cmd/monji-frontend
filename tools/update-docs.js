// Usage examples:
// node tools/update-docs.js --structure ./docs-project-structure.md --app-tree ./app-tree.txt --components-tree ./components-tree.txt --backend-tree ../ghaaanoon-backend/backend-src-tree.txt
// node tools/update-docs.js --endpoints ./docs-modian-endpoints.md
const fs = require('fs');
const path = require('path');

function read(p) { return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : ''; }
function write(p, s) { fs.writeFileSync(p, s, 'utf8'); }

function replaceBlock(doc, marker, body) {
  const start = `<!-- BEGIN:${marker} -->`;
  const end = `<!-- END:${marker} -->`;
  const block = `${start}\n\`\`\`txt\n${(body||'').trim()}\n\`\`\`\n${end}`;
  const re = new RegExp(`${start}[\\s\\S]*?${end}`, 'm');
  if (re.test(doc)) return doc.replace(re, block);
  // append if missing:
  return `${doc.trim()}\n\n### ${marker}\n${block}\n`;
}

function arg(name) {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : undefined;
}

const structure = arg('structure');       // docs-project-structure.md
const endpoints = arg('endpoints');       // docs-modian-endpoints.md
const appTree = arg('app-tree');          // app-tree.txt
const compTree = arg('components-tree');  // components-tree.txt
const backTree = arg('backend-tree');     // backend-src-tree.txt

if (structure) {
  let doc = read(structure);
  if (!doc) { console.error('Structure doc not found:', structure); process.exit(1); }
  if (appTree)  doc = replaceBlock(doc, 'APP_TREE', read(appTree));
  if (compTree) doc = replaceBlock(doc, 'COMPONENTS_TREE', read(compTree));
  if (backTree) doc = replaceBlock(doc, 'BACKEND_TREE', read(backTree));
  write(structure, doc);
  console.log('Updated:', path.resolve(structure));
}

if (endpoints) {
  let doc = read(endpoints);
  if (!doc) { console.error('Endpoints doc not found:', endpoints); process.exit(1); }
  // رزرو برای آینده: اگر بخوای بخشی را خودکار بروزرسانی کنیم، اینجا اضافه می‌شود.
  write(endpoints, doc);
  console.log('Checked:', path.resolve(endpoints));
}
