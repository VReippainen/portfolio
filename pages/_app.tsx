import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, useEffect } from 'react'
import TagManager from 'react-gtm-module'

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

export default function App({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    if (GTM_ID) {
      TagManager.initialize({ gtmId: GTM_ID })
    }
  }, [])
  return <Component {...pageProps} />
}
