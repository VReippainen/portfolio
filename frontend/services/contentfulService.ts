import { createClient, Entry } from 'contentful'
import { PageModel } from '../models/PageModel'
import { WebSiteModel } from '../models/WebSiteModel'

const WEBSITE_ID = process.env.WEBSITE_ID

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function fetchPages(): Promise<Entry<PageModel>[]> {
  try {
    const webSiteEntry = (await client
      .getEntries({
        content_type: 'webSite',
        include: 3,
      })
      .then((entries) =>
        entries.items.find(
          (entry: Entry<WebSiteModel>) => entry.fields.id === WEBSITE_ID
        )
      )) as Entry<WebSiteModel>

    return webSiteEntry.fields.pages as Entry<PageModel>[]
  } catch (error) {
    console.log('ERROR', error)
    throw error
  }
}
