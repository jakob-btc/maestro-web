import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import ForgotPasswordForm from '@/components/ForgotPassword/ForgotPasswordForm';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const ForgotPassword = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Forgot Password" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Forgot Password" 
                BGImage="item-bg-3" 
            />

            <ForgotPasswordForm />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default ForgotPassword;