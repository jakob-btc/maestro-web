import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import BlogPost from '@/components/Blog/BlogPost';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Blog = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Blog" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog" 
                BGImage="item-bg-2" 
            />

            <BlogPost />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Blog;