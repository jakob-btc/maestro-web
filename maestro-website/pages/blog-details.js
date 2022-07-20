import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import BlogDetailsContent from '@/components/BlogDetails/BlogDetailsContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const BlogDetails = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
                BGImage="item-bg-3" 
            />

            <BlogDetailsContent />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default BlogDetails;