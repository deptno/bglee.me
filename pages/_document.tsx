import * as React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {
  DEV, FB_TRACKING_ID, SENTRY_TRACKING_ID, SITE_DESCRIPTION, SITE_IMAGE,
  SITE_NAME, SITE_TITLE
} from '../src/constants/env'

export default class extends Document {
  static async getInitialProps(...args) {
    const d: any = Document
    const documentProps = await d.getInitialProps(...args)
    const {req, renderPage} = args[0]
    const page = renderPage()

    return {...documentProps, ...page}
  }

  render() {
    return (
      <html lang="ko">
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
        />
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content={SITE_NAME}/>
        <meta property="og:title" content={SITE_TITLE}/>
        <meta property="og:description" content={SITE_DESCRIPTION}/>
        <meta property="og:image" content={SITE_IMAGE}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content={SITE_NAME}/>
        <meta name="twitter:title" content={SITE_TITLE}/>
        <meta name="twitter:description" content={SITE_DESCRIPTION}/>
        <meta property="twitter:image" content={SITE_IMAGE}/>

        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"/>
        <link href="//fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans" rel="stylesheet" type="text/css"/>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          {...{crossOrigin: 'anonymous'}}
        />
        <link rel="shortcut icon" href="/static/img/favicon.ico"/>

        <meta name="format-detection" content="telephone=no, address=no, email=no"/>
        <script type="text/javascript" src="//wcs.naver.net/wcslog.js"></script>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries"></script>
        {!DEV && FB_TRACKING_ID && (
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window,document,'script', 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '${FB_TRACKING_ID}');
fbq('track', 'PageView'); `
            }}
          />
        )}
        {!DEV && FB_TRACKING_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              src={`//www.facebook.com/tr?id=${FB_TRACKING_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
        {!DEV && SENTRY_TRACKING_ID && (
          <script
            src="https://cdn.ravenjs.com/3.17.0/raven.min.js"
            {...{crossOrigin: 'anonymous'}}
          ></script>
        )}
        {!DEV && SENTRY_TRACKING_ID && (
          <script dangerouslySetInnerHTML={{
            __html: `Raven.config('https://${SENTRY_TRACKING_ID}@sentry.io/156600').install()`
          }}>
          </script>
        )}
        {DEV
          ? <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript"></script>
          : <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
        }
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
      </html>
    )
  }
}

