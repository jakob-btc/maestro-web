import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import SearchResult from '@/components/SearchPage/SearchResult';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const SearchPage = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Search Page" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Search Page" 
                BGImage="item-bg-2" 
            />

            <SearchResult />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default SearchPage;