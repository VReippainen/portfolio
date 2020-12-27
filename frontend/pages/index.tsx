import { GetStaticPropsResult } from 'next'
import React, { ReactElement } from 'react'
import { fetchPages } from '../services/contentfulService'
import { Page, PageProps } from '../components/sections/Page'

export async function getStaticProps(): Promise<
  GetStaticPropsResult<PageProps>
> {
  const pages = await fetchPages()
  const navUrls = pages.map((p) => {
    return { url: p.fields.id, name: p.fields.name }
  })
  return {
    props: {
      pageEntry: pages.find((p) => p.fields.id === '/'),
      navUrls,
    },
  }
}

export default function Home(props: PageProps): ReactElement {
  return <Page {...props} />
}
