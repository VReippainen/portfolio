import { GetStaticPropsResult } from 'next'
import React, { ReactElement } from 'react'
import { fetchPages } from '../services/contentfulService'
import { PageModel } from '../models/PageModel'
import { Entry } from 'contentful'
import styled from 'styled-components'
import Head from 'next/head'
import { Footer } from '../components/sections/Footer'
import { getPageById } from '../utils/sectionMapper'

export interface Props {
  pages: Entry<PageModel>[]
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const pages = await fetchPages()
  return {
    props: {
      pages,
    },
  }
}

const Main = styled.main``

const PageContainer = styled.div``

export default function HomeInternal({ pages }: Props): ReactElement {
  const navUrls = pages.map((p) => {
    return { url: p.fields.id, name: p.fields.name }
  })
  return (
    <PageContainer>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        {pages.map((page) => {
          const { id } = page.fields
          const Page = getPageById(id)
          return Page ? <Page key={id} pageEntry={page} /> : null
        })}
      </Main>
      <Footer />
    </PageContainer>
  )
}
