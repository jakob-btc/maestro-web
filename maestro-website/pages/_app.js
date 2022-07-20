import '@/styles/bootstrap.min.css'
import '@/styles/flaticon.css'
import '@/styles/remixicon.css'
import '@/styles/animate.min.css'
import '../node_modules/react-modal-video/css/modal-video.min.css'
import "react-datepicker/dist/react-datepicker.css";
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-image-lightbox/style.css'

// Global CSS
import '@/styles/styles.css'
import '@/styles/responsive.css'

import Layout from '@/components/_App/Layout';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;