import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import HeroSlider from '@/components/HomeOne/HeroSlider/HeroSlider';
import AboutCompany from '@/components/HomeOne/AboutCompany/AboutCompany';
import ServiceSlider from '@/components/Services/ServiceSliderStyle1/ServiceSlider';
import WhyChooseUs from '@/components/HomeOne/WhyChooseUs/WhyChooseUs';
import FunFact from '@/components/Common/FunFact/FunFact';
import CaseStudiesSlider from '@/components/CaseStudies/CaseStudiesStyle1/CaseStudiesSlider';
import HowCanWeHelp from '@/components/Common/HowCanWeHelp/HowCanWeHelp';
import OurTeam from '@/components/Common/OurTeam/OurTeam';
import AppointmentForm from '@/components/Appointment/AppointmentStyle1/AppointmentForm';
import TestimonialSlider from '@/components/Common/Testimonials/TestimonialSlider';
import PartnerSlider from '@/components/Common/Partners/PartnerSlider';
import OurBlog from '@/components/Common/OurBlog/OurBlog';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';
 
const IndexPage = () => {
    return (
        <>
            <NavbarStyleOne />

            <HeroSlider />

            <AboutCompany />

            <ServiceSlider />

            <WhyChooseUs /> 

            <FunFact />

            <CaseStudiesSlider />
            
            <div className="pb-100">
                <HowCanWeHelp />
            </div>
            
            <OurTeam />

            <AppointmentForm />

            <TestimonialSlider />

            <PartnerSlider />

            <OurBlog />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default IndexPage;