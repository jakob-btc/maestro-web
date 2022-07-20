import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import ServicesCard from '@/components/Services/ServicesCard';
import HowCanWeHelp from '@/components/Common/HowCanWeHelp/HowCanWeHelp';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Services = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Services" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Services" 
                BGImage="item-bg-4" 
            />

            <ServicesCard />

            <div className="pb-100">
                <HowCanWeHelp />
            </div>
		 
            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Services;