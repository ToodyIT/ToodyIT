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
      </Head>
      <body>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
