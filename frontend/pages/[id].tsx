import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next'
import React, { ReactElement } from 'react'
import { fetchPages } from '../services/contentfulService'
import { Page, PageProps } from '../components/sections/Page'

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const pages = await fetchPages()

  const paths = pages.map((page) => ({
    params: { id: page.fields.id },
  }))
  return { paths, fallback: false }
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

export default function IdPage(props: PageProps): ReactElement {
  return <Page {...props} />
}
