import { Entry } from 'contentful'
import { GetStaticPropsResult } from 'next'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import { Header } from '../components/sections/Header'
import { NavUrl } from '../models/NavUrl'
import { PageModel } from '../models/PageModel'
import { fetchPages } from '../services/contentfulService'
import { Footer } from '../components/sections/Footer'
import { generatePage, Main, PageContainer } from './[id]'

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

interface PageProps {
  pageEntry: Entry<PageModel>
  navUrls: NavUrl[]
}

export default function Home({ pageEntry, navUrls }: PageProps): ReactElement {
  const { sections, name } = pageEntry.fields
  return (
    <PageContainer>
      <Head>
        <title>{name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header navUrls={navUrls} />
      <Main>{generatePage(sections)}</Main>
      <Footer />
    </PageContainer>
  )
}
