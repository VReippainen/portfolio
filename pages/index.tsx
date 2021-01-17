import { GetStaticPropsResult } from 'next'
import React, { ReactElement } from 'react'
import { fetchWebsite } from '../services/contentfulService'
import { PageModel } from '../models/PageModel'
import { Entry } from 'contentful'
import styled from 'styled-components'
import { Footer } from '../components/sections/Footer'
import { getPageById } from '../utils/sectionMapper'
import { NextSeo } from 'next-seo'
import { MetaModel } from '../models/MetaModel'
import { WebSiteModel } from '../models/WebSiteModel'
import { NavBar } from '../components/navigation/NavBar'
//import { generateSitemap } from '../utils/generateSitemap'
//import { generateRobots } from '../utils/generateRobots'

export interface Props {
  pages: Entry<PageModel>[]
  meta: Entry<MetaModel>
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const webSite = await fetchWebsite()
  /*
  TODO: creating robots.txt and sitemap dynamically failed. There were some issues with fs.
  Figure out another way to create these files, next-sitemap perhaps?
   */
  //await generateRobots(webSite.fields.url)
  //await generateSitemap(webSite.fields.url)
  return {
    props: webSite.fields,
  }
}

const Main = styled.main``

const PageContainer = styled.div``

export default function Home({ pages, meta }: WebSiteModel): ReactElement {
  const navUrls = pages.map((p) => {
    return { url: p.fields.id, name: p.fields.name }
  })
  return (
    <PageContainer>
      <NextSeo {...meta.fields} />
      <Main>
        {pages.map((page) => {
          const { id } = page.fields
          const Page = getPageById(id)
          return Page ? <Page key={id} pageEntry={page} /> : null
        })}
        <NavBar {...{ navUrls }} />
      </Main>
      <Footer />
    </PageContainer>
  )
}
