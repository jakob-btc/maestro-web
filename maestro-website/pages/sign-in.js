import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import SignInForm from '@/components/SignIn/SignInForm';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const SignIn = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Sign In" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign In" 
                BGImage="item-bg-2" 
            />

            <SignInForm />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default SignIn;