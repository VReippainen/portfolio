import '../styles/globals.css'
import { StyleSheetManager } from 'styled-components'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import isPropValid from '@emotion/is-prop-valid'
import type { AppProps } from 'next/app'

const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if (GTM_ID) {
      TagManager.initialize({ gtmId: GTM_ID })
    }
  }, [])
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <Component {...pageProps} />
    </StyleSheetManager>
  )
}
