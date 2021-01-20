import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, useEffect } from 'react'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
}

export default function App({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return <Component {...pageProps} />
}
