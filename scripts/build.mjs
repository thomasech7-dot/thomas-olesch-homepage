import { cp, mkdir, rm, readFile, writeFile, readdir } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('site', 'dist', { recursive: true });
const siteUrl = process.env.SITE_URL || 'https://thomas-olesch-homepage.vercel.app';
const publish = process.env.SITE_PUBLISH !== 'false';
if (publish && !siteUrl) throw new Error('SITE_URL is required for an indexable publication.');
if (siteUrl) {
  const base = new URL(siteUrl);
  if (base.protocol !== 'https:' || base.pathname !== '/' || base.search || base.hash) throw new Error('SITE_URL must be an HTTPS origin.');
  const urls = [];
  async function patch(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const path = `${dir}/${entry.name}`;
      if (entry.isDirectory()) { await patch(path); continue; }
      if (!entry.name.endsWith('.html')) continue;
      let html = await readFile(path, 'utf8');
      const route = path.replace(/^dist/, '').replace(/index.html$/, '');
      const canonical = new URL(route, base).href;
      if (entry.name !== '404.html') {
        html = html.replace(/<link\b[^>]*\brel=["']canonical["'][^>]*>/gi, '')
          .replace(/<meta\b[^>]*\bproperty=["']og:(url|image)["'][^>]*>/gi, '');
        html = html.replace('</head>', `<link rel="canonical" href="${canonical}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${base.origin}/assets/thomas-studio.webp"></head>`);
        if (!/\/(impressum|datenschutz)\//.test(route)) urls.push(canonical);
        if (publish && !/\/(impressum|datenschutz)\//.test(route)) html = html.replace('noindex,follow', 'index,follow');
      }
      await writeFile(path, html);
    }
  }
  await patch('dist');
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url => `<url><loc>${url}</loc></url>`).join('')}</urlset>`);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${base.origin}/sitemap.xml\n`);
  await writeFile('dist/llms.txt', `# Thomas Olesch Copywriting & Webdesign\n\nThomas Olesch erstellt Websites, Landingpages und Texte für Selbstständige und kleinere Unternehmen in Deutschland, Österreich und der Schweiz. Sein Standort ist Hildesheim; die Zusammenarbeit erfolgt remote.\n\n## Wichtige Seiten\n- Startseite: ${base.origin}/\n- Webdesign & Copywriting: ${base.origin}/webdesign-copywriting/\n- SEO & GEO: ${base.origin}/seo-geo/\n- E-Mail-Marketing: ${base.origin}/email-marketing/\n- Social Media Content: ${base.origin}/social-media/\n- Ausbildung & Netzwerk: ${base.origin}/ausbildung-netzwerk/\n\n## Kontakt\nE-Mail: ThomasOlesch.Copywriting@web.de\n`);
} else {
  await writeFile('dist/robots.txt', 'User-agent: *\nAllow: /\n');
}
console.log('Static website built in dist. No runtime dependencies.');
