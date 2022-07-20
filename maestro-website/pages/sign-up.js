import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import SignUpForm from '@/components/SignUp/SignUpForm';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const SignUp = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Sign Up" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Sign Up" 
                BGImage="item-bg-5" 
            />

            <SignUpForm />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default SignUp;