/**
 * Created by jovialis (Dylan Hanson) on 9/12/20
 **/

import React from 'react';

// Import Bootstrap.
// import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";

// Import global style
import '../styles/global.scss';

export default function App({Component, pageProps}) {
    return <div className={'app'}>
        <Head>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content=""/>
            <link rel="icon" href="/public/favicon.ico"/>
            <link rel={"shortcut icon"} href={'/favicon.ico'}/>
            <meta property="og:title" content=""/>
            <meta property="og:url" content=""/>
            <title></title>
        </Head>
        <Component {...pageProps} />
    </div>
}
