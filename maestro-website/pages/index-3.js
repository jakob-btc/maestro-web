import React from 'react';
import NavbarStyleThree from '@/components/_App/NavbarStyleThree';
import MainBanner from '@/components/HomeThree/MainBanner/MainBanner';
import PartnerSlider from '@/components/Common/PartnersTwo/PartnerSlider';
import AboutCompany from '@/components/HomeThree/AboutCompany/AboutCompany';
import FunFact from '@/components/Common/FunFactTwo/FunFact';
import WhyChooseUs from '@/components/HomeThree/WhyChooseUs/WhyChooseUs';
import ServiceSlider from '@/components/Services/ServiceSliderStyle2/ServiceSlider';
import AppointmentForm from '@/components/Appointment/AppointmentStyle3/AppointmentForm';
import OurTeam from '@/components/Common/OurTeam/OurTeam';
import CaseStudiesSlider from '@/components/CaseStudies/CaseStudiesStyle3/CaseStudiesSlider';
import PricingTable from '@/components/Pricing/PricingTable';
import HowCanWeHelp from '@/components/Common/HowCanWeHelp2/HowCanWeHelp';
import OurBlog from '@/components/Common/OurBlog/OurBlog';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const IndexPage3 = () => {
    return (
        <>
            <NavbarStyleThree />

            <MainBanner />

            <div className="ptb-100">
                <PartnerSlider />
            </div>

            <AboutCompany />

            <div className="ptb-100">
                <FunFact />
            </div>

            <WhyChooseUs />
            
            <ServiceSlider />
            
            <div className="pb-100">
                <AppointmentForm />
            </div>

            <OurTeam />
            
            <CaseStudiesSlider />

            <PricingTable />

            <HowCanWeHelp />

            <OurBlog />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default IndexPage3;