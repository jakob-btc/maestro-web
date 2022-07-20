import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import PrivacyPolicyContent from '@/components/PrivacyPolicy/PrivacyPolicyContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const PrivacyPolicy = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Privacy Policy" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Privacy Policy" 
                BGImage="item-bg-2" 
            />

            <PrivacyPolicyContent />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default PrivacyPolicy;