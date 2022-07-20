import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'
import Preloader from './Preloader/Preloader'

const Layout = ({ children }) => {

    // Preloader
    const [loader, setLoader] = React.useState(true);
    React.useEffect(() => {
        setTimeout(() => setLoader(false), 1500);
    }, [])

    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" href="/images/favicon.png"></link>
                <title>Biza - React Next.js IT Solutions & Services Template</title>
            </Head>

            {children}

            {loader ? <Preloader /> : null}
 
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;