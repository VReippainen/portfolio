import '../styles/globals.css'
import { ReactElement, useEffect } from 'react'
import TagManager from 'react-gtm-module'
import type { AppProps } from 'next/app'

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

export default function App({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    if (GTM_ID) {
      TagManager.initialize({ gtmId: GTM_ID })
    }
  }, [])
  return <Component {...pageProps} />
}
