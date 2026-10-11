import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('dist');
const files = [];
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p); else files.push(p);
  }
}
await walk(root);
let references = 0;
const fail = [];
for (const file of files.filter(f => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  if ((html.match(/<h1[ >]/g)||[]).length !== 1) fail.push(`${file}: expected one h1`);
  if (!html.includes('lang="de"') || !html.includes('name="viewport"')) fail.push(`${file}: language or viewport missing`);
  for (const [,json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(json); } catch { fail.push(`${file}: invalid structured data`); }
  }
  for (const [,attrs] of html.matchAll(/<img ([^>]+)>/g)) {
    if (!/alt="[^"]*"/.test(attrs)||!attrs.includes('width=')||!attrs.includes('height=')) fail.push(`${file}: image accessibility/dimensions missing`);
  }
  for (const [,ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:)/.test(ref)) continue;
    const [routeWithQuery,fragment] = ref.split('#');
    const route = routeWithQuery.split('?')[0];
    let target = route ? path.join(root,route.replace(/^\//,'')) : file;
    try {
      if ((await stat(target)).isDirectory()) target=path.join(target,'index.html');
      await stat(target);
      if(fragment){const doc=await readFile(target,'utf8');if(!doc.includes(`id="${fragment}"`)) fail.push(`${file}: missing fragment ${ref}`);}
      references++;
    } catch { fail.push(`${file}: broken reference ${ref}`); }
  }
  if (/Mittelgroßer Klartext|ich ich|© 2025 Unternehmen/.test(html)) fail.push(`${file}: original placeholder remains`);
}
if (fail.length) {console.error(fail.join('\n')); process.exit(1);}
console.log(`${files.filter(f=>f.endsWith('.html')).length} pages checked; ${references} internal links and assets resolve; structured data valid.`);
