import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import BlogPost from '@/components/Author/BlogPost/BlogPost';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Author = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Author" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Author" 
                BGImage="item-bg-3" 
            />

            <BlogPost />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Author;