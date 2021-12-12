import type { AppProps } from 'next/app'
import Script from 'next/script'

import '../styles/App.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <Script
        id="ym-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(2177449, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true
            });
          `,
        }}
      />
    </>
  )
}

export default MyApp
