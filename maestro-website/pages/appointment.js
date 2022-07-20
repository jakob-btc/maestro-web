import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';
import HowCanWeHelp from '@/components/Common/HowCanWeHelp/HowCanWeHelp';
import AppointmentForm from '@/components/Appointment/AppointmentStyle2/AppointmentForm';
import TestimonialSlider from '@/components/Common/Testimonials/TestimonialSlider';
import NewsletterForm from '@/components/Common/NewsletterForm/NewsletterForm';
import Footer from '@/components/_App/Footer';

const Appointment = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Appointment" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Appointment" 
                BGImage="item-bg-1" 
            />

            <div className="ptb-100">
                <HowCanWeHelp />
            </div>
            

            <AppointmentForm />

            <TestimonialSlider />

            <NewsletterForm />

            <Footer />
        </>
    )
}

export default Appointment;