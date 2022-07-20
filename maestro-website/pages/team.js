import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import TeamMember from '@/components/Team/TeamMember';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Team = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Team" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Team" 
                BGImage="item-bg-4" 
            />

            <TeamMember />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Team;