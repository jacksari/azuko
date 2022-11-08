import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from "react";

class MainDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render () {
        return (
            <Html lang='es'>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-T37ZSJ66JL"></script>
                    <script type="text/javascript"
                            dangerouslySetInnerHTML={{
                                __html: `
                    window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-T37ZSJ66JL');
                  `,
                            }}
                    >

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

export default MainDocument
