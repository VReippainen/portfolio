import { Entry } from 'contentful'
import { Footer } from '../components/sections/Footer'
import { GetStaticPropsResult } from 'next'
import { MetaModel } from '../models/MetaModel'
import { NavBar } from '../components/navigation/NavBar'
import { NextSeo } from 'next-seo'
import { PageModel } from '../models/PageModel'
import { WebSiteModel } from '../models/WebSiteModel'
import { fetchWebsite } from '../services/contentfulService'
import { generatePages } from '../utils/generatePages'
import React from 'react'

export interface Props {
  pages: Entry<PageModel>[]
  meta: Entry<MetaModel>
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const { fields } = await fetchWebsite()
  return {
    props: fields,
  }
}

export default function Home({ pages, meta }: WebSiteModel): JSX.Element {
  return (
    <div>
      <NextSeo {...meta.fields} />
      <div>
        {generatePages(pages)}
        <NavBar
          navUrls={pages.map(({ fields }) => ({
            url: fields.id,
            name: fields.name,
          }))}
        />
      </div>
      <Footer />
    </div>
  )
}
