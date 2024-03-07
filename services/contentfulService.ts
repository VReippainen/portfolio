import { Entry, createClient } from 'contentful'
import { WebSiteModel } from '../models/WebSiteModel'

const WEBSITE_ID = process.env.WEBSITE_ID ?? ''

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? '',
  host: process.env.CONTENTFUL_HOST ?? '',
})

export async function fetchWebsite(): Promise<Entry<WebSiteModel>> {
  try {
    return (await client
      .getEntries<WebSiteModel>({
        content_type: 'webSite',
        include: 3,
      })
      .then((entries) =>
        entries.items.find(
          (entry: Entry<WebSiteModel>) => entry.fields.id === WEBSITE_ID
        )
      )) as Entry<WebSiteModel>
  } catch (error) {
    console.log('ERROR', error)
    throw error
  }
}
