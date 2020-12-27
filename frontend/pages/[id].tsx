import { Entry } from 'contentful'
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import { Header } from '../components/sections/Header'
import { NavUrl } from '../models/NavUrl'
import { PageModel } from '../models/PageModel'
import { fetchPages } from '../services/contentfulService'
import { Footer } from '../components/sections/Footer'
import styled from 'styled-components'
import { SectionModel } from '../models/SectionModel'
import { getSectionById } from '../utils/sectionMapper'

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const pages = await fetchPages()

  const paths = pages.map((page) => ({
    params: { id: page.fields.id },
  }))
  const result = { paths, fallback: false }
  return result
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<PageProps>> {
  const pages = await fetchPages()
  const navUrls = pages.map((p) => {
    return { url: p.fields.id, name: p.fields.name }
  })
  return {
    props: {
      pageEntry: pages.find((p) => p.fields.id === context?.params?.id),
      navUrls,
    },
  }
}

export function generatePage(sections: Entry<SectionModel>[]): ReactElement[] {
  return sections
    .map((section) => {
      const SectionComponent = getSectionById(section.sys.contentType.sys.id)
      return SectionComponent ? (
        <SectionComponent key={section.fields.id} {...section} />
      ) : null
    })
    .filter((e) => e !== null)
}

export const Main = styled.main`
  width: 100%;
`

export const PageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

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
