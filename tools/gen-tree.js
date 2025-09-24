// Node >=16
const fs = require('fs');
const path = require('path');

const IGNORE_DIRS = new Set(['node_modules', '.git', '.next', 'dist', 'build', 'coverage', '.idea', '.vscode']);
const IGNORE_FILES = new Set(['Thumbs.db', '.DS_Store']);

function list(dir) {
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter(d => !IGNORE_DIRS.has(d.name) && !IGNORE_FILES.has(d.name))
    .sort((a, b) => (a.isDirectory() === b.isDirectory()) ? a.name.localeCompare(b.name) : (a.isDirectory() ? -1 : 1));
}

function renderTree(root, prefix = '') {
  const entries = list(root);
  let out = path.normalize(root) + '\n';
  entries.forEach((ent, idx) => {
    const last = idx === entries.length - 1;
    const connector = last ? '└─ ' : '├─ ';
    const nextPrefix = prefix + (last ? '   ' : '│  ');
    const full = path.join(root, ent.name);
    out += prefix + connector + ent.name + (ent.isDirectory() ? '/' : '') + '\n';
    if (ent.isDirectory()) out += renderSub(full, nextPrefix);
  });
  return out;
}

function renderSub(dir, prefix) {
  const entries = list(dir);
  let out = '';
  entries.forEach((ent, idx) => {
    const last = idx === entries.length - 1;
    const connector = last ? '└─ ' : '├─ ';
    const nextPrefix = prefix + (last ? '   ' : '│  ');
    const full = path.join(dir, ent.name);
    out += prefix + connector + ent.name + (ent.isDirectory() ? '/' : '') + '\n';
    if (ent.isDirectory()) out += renderSub(full, nextPrefix);
  });
  return out;
}

const inDir = process.argv[2] || '.';
const outFile = process.argv[3];
const tree = renderTree(inDir);
if (outFile) fs.writeFileSync(outFile, tree, 'utf8'); else process.stdout.write(tree);
