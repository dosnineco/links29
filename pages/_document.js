import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

 
  render() {
    return (
      <Html lang="en">
          <Head>
          <script
            async
            // src={`https://www.googletagmanager.com/gtag/js?id=UA-213178747-1`}
          />
{/*           
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
          /> */}
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