import fs from 'fs'

// Dirty hack to create a dynamic sitemap
export async function generateSitemap(url: string): Promise<void> {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">   
    <url>
        <loc>${url}</loc>
        <changefreq>daily</changefreq>
        <lastmod>${new Date().toISOString()}</lastmod>
    </url>
</urlset>`

  fs.writeFileSync('public/sitemap.xml', sitemap)
}
