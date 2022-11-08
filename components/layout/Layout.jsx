import React from 'react';
import Nav from "./Nav";
import Footer from "./Footer";
import Head from 'next/head'

function Layout({children}) {
    return (
        <>
            <Head>
                <script type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
                    (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:2787632,hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                  `,
                        }}
                >

                </script>
            </Head>
            <Nav/>
            <div className="min-h-screen">
                {
                    children
                }
            </div>
            <Footer/>
        </>
    );
}

export default Layout;
