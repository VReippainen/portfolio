import fs from 'fs'

// Dirty hack to create a dynamic sitemap
export async function generateRobots(url: string): Promise<void> {
  const sitemap = `User-agent: *
Allow: /
  
Sitemap: ${url}/sitemap.xml`

  fs.writeFileSync('public/robots.txt', sitemap)
}
