import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import GalleryContent from '@/components/Gallery/GalleryContent';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Gallery = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Gallery" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Gallery" 
                BGImage="item-bg-5" 
            />

            <GalleryContent />
	 

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Gallery;