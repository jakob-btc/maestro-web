import React from 'react';
import NavbarStyleTwo from '@/components/_App/NavbarStyleTwo';
import HeroSlider from '@/components/HomeTwo/HeroSlider/HeroSlider';
import ServiceSlider from '@/components/Services/ServiceSliderStyle2/ServiceSlider';
import AboutCompany from '@/components/HomeTwo/AboutCompany/AboutCompany';
import WhyChooseUs from '@/components/HomeTwo/WhyChooseUs/WhyChooseUs';
import CaseStudies from '@/components/CaseStudies/CaseStudiesStyle2/CaseStudies';
import PricingTable from '@/components/Pricing/PricingTable';
import AppointmentForm from '@/components/Appointment/AppointmentStyle2/AppointmentForm';
import TestimonialSlider from '@/components/Common/TestimonialsTwo/TestimonialSlider';
import PartnerSlider from '@/components/Common/PartnersTwo/PartnerSlider';
import OurBlog from '@/components/Common/OurBlog/OurBlog';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const IndexPage2 = () => {
    return (
        <>
            <NavbarStyleTwo />

            <HeroSlider />

            <ServiceSlider />

            <AboutCompany />

            <WhyChooseUs />

            <CaseStudies />

            <PricingTable />

            <AppointmentForm />

            <TestimonialSlider />

            <div className="ptb-100 border-top border-bottom">
                <PartnerSlider />
            </div>
  
            <OurBlog />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default IndexPage2;