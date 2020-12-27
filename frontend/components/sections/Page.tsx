import { Entry } from 'contentful'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { NavUrl } from '../../models/NavUrl'
import { PageModel } from '../../models/PageModel'
import { SectionModel } from '../../models/SectionModel'
import { getSectionById } from '../../utils/sectionMapper'
import { Footer } from './Footer'
import { Header } from './Header'

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

const Main = styled.main`
  width: 100%;
`

const PageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export interface PageProps {
  pageEntry: Entry<PageModel>
  navUrls: NavUrl[]
}

export function Page({ pageEntry, navUrls }: PageProps): ReactElement {
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
