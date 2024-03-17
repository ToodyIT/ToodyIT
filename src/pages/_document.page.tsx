import { Html, Head, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script
          strategy="lazyOnload"
          id="cookieyes"
          type="text/javascript"
          src="https://cdn-cookieyes.com/client_data/44d0af6cd902359de29ba189/script.js"
        />
        {/* <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TP6V5HW6');
            `,
          }}
        />
        <Script
          id="gtagAds"
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16474957346"
          strategy="lazyOnload"
        />
        <Script
          id="gtmAds"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'AW-16474957346');
            `,
          }}
        />
        <Script
          id="gtmAdsEvent"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {'send_to': 'AW-16474957346/w_rgCIDQ1ZYZEKLM7689'});
            `,
          }}
        /> */}
      </Head>
      <body>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
