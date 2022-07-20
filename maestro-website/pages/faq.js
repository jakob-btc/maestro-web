import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import FaqContent from '@/components/FAQ/FaqContent';
import FaqContactForm from '@/components/FAQ/FaqContactForm/FaqContactForm';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const FAQ = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="FAQ" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQ" 
                BGImage="item-bg-2" 
            />

            <FaqContent />

            <FaqContactForm />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default FAQ;