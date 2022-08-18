import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

 
  render() {
    return (
      <Html lang="en">
          <Head>
          <meta name="google-site-verification" content="Whrv3gCttHLv5OdtXLp9qLZ0rHyY-bEoNw8Kg7M0H00" />          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-213178747-1`}
          />
          
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'UA-213178747-1', {
                  page_path: window.location.pathname,
                });
            `,
            }}
          />
                    <link
            rel="prefetch"
            href='/font/OpenSans/OpenSans-ExtraBold.ttf'
            as='font'
            crossOrigin="anonymous"
            type="font/ttf"
          />

            <link
            rel="prefetch"
            href='/font/Roboto/Roboto-Regular.ttf'
            as='font'
            crossOrigin="anonymous"
            type="font/ttf"
          />
          <link
            rel="prefetch"
            href='/font/Roboto/Roboto-Bold.ttf'
            as='font'
            crossOrigin="anonymous"
            type="font/ttf"
          />
          <link
            rel="prefetch"
            href='/font/Roboto/Roboto-Medium.ttf'
            as='font'
            crossOrigin="anonymous"
            type="font/ttf"
          />
        <script 
          async 
          src= {`https://www.googleoptimize.com/optimize.js?id=${process.env.GOOGLE_OPTIMISE_KEY}`}>
        </script>

        
                    
        </Head>     
        <body>
          
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument