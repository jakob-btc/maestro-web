import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import PricingTable from '@/components/Pricing/PricingTable';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Pricing = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Pricing Plans" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Pricing" 
                BGImage="item-bg-2" 
            />

            <PricingTable />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Pricing;