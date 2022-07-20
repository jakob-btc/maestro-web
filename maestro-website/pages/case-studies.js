import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import CaseStudiesCard from '@/components/CaseStudies/CaseStudiesCard';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const CaseStudies = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Case Studies" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Case Studies" 
                BGImage="item-bg-2" 
            />

            <CaseStudiesCard />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default CaseStudies;