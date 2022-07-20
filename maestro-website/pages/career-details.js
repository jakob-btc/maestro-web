import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import CareerDetailsContent from '@/components/CareerDetails/CareerDetailsContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const CareerDetails = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Career Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Career Details" 
                BGImage="item-bg-1" 
            />

            <CareerDetailsContent />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default CareerDetails;