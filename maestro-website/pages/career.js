import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import CareerContent from '@/components/Career/CareerContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Career = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Career" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Career" 
                BGImage="item-bg-4" 
            />

            <CareerContent />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Career;