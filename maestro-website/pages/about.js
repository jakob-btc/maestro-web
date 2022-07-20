import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import AboutContent from '@/components/About/AboutContent/AboutContent';
import FunFact from '@/components/Common/FunFactTwo/FunFact';
import WhyChooseUs from '@/components/About/WhyChooseUs/WhyChooseUs';
import OurTeam from '@/components/Common/OurTeam/OurTeam';
import TestimonialSlider from '@/components/Common/Testimonials/TestimonialSlider';
import PartnerSlider from '@/components/Common/PartnersTwo/PartnerSlider';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const About = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="About" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="About" 
                BGImage="item-bg-1" 
            />

			<AboutContent />

            <FunFact />

            <WhyChooseUs />

            <OurTeam />

            <PartnerSlider />

            <TestimonialSlider />
             
            <NewsletterForm />

            <Footer />
        </>
    )
}

export default About;