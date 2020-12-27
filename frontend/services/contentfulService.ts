import { createClient, Entry } from 'contentful'
import { PageModel } from '../models/PageModel'

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function fetchPages(): Promise<Entry<PageModel>[]> {
  try {
    const entries = await client.getEntries({
      content_type: 'page',
    })

    return entries.items as Entry<PageModel>[]
  } catch (error) {
    console.log('ERROR', error)
    throw error
  }
}
