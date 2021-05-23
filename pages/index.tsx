import { Entry } from 'contentful'
import { GetStaticPropsResult } from 'next'
import { NextSeo } from 'next-seo'
import React, { ReactElement } from 'react'
import { NavBar } from '../components/navigation/NavBar'
import { Footer } from '../components/sections/Footer'
import { MetaModel } from '../models/MetaModel'
import { PageModel } from '../models/PageModel'
import { WebSiteModel } from '../models/WebSiteModel'
import { fetchWebsite } from '../services/contentfulService'
import { generatePages } from '../utils/generatePages'

export interface Props {
  pages: Entry<PageModel>[]
  meta: Entry<MetaModel>
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const webSite = await fetchWebsite()
  return {
    props: webSite.fields,
  }
}

export default function Home({ pages, meta }: WebSiteModel): ReactElement {
  const navUrls = pages.map((p) => {
    return { url: p.fields.id, name: p.fields.name }
  })
  return (
    <div>
      <NextSeo {...meta.fields} />
      <div>
        {generatePages(pages)}
        <NavBar {...{ navUrls }} />
      </div>
      <Footer />
    </div>
  )
}
