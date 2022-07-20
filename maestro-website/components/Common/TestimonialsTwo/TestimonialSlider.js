import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/Common/TestimonialsTwo/TestimonialSlider.module.css'

const options = {
    loop: false,
    nav: false,
    dots: true,
    margin: 25,
    autoplayHoverPause: true,
    autoplay: true,
    
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
};

// Testimonial Content
const TestimonialContent = [
    {
        image: "/images/testimonials/testimonials-1.jpg",
        imageAlt: "Client image",
        name: "Samuel Glenn",
        designation: "Director",
        feedbackText: "Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem libero malesuada feugiat. Donec sollicitudin molestie Cras ultricies ligula sed magna dictum porta.",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
    },
    {
        image: "/images/testimonials/testimonials-2.jpg",
        imageAlt: "Client image",
        name: "Thomas Bunch",
        designation: "Co Founder & CEO",
        feedbackText: "Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem libero malesuada feugiat. Donec sollicitudin molestie Cras ultricies ligula sed magna dictum porta.",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
    },
    {
        image: "/images/testimonials/testimonials-3.jpg",
        imageAlt: "Client image",
        name: "Gladys Wells",
        designation: "Head of HR",
        feedbackText: "Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem libero malesuada feugiat. Donec sollicitudin molestie Cras ultricies ligula sed magna dictum porta.",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
    },
    {
        image: "/images/testimonials/testimonials-4.jpg",
        imageAlt: "Client image",
        name: "William",
        designation: "Best Designer",
        feedbackText: "Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem libero malesuada feugiat. Donec sollicitudin molestie Cras ultricies ligula sed magna dictum porta.",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
    },
    {
        image: "/images/testimonials/testimonials-5.jpg",
        imageAlt: "Client image",
        name: "George",
        designation: "QC Expert",
        feedbackText: "Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem libero malesuada feugiat. Donec sollicitudin molestie Cras ultricies ligula sed magna dictum porta.",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
        ratingIcon: "ri-star-fill",
    },
]

const TestimonialSlider = () => {

    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className={styles.testimonialsArea}>
                <div className="container ptb-100">
                    <div className="section-title">
                        <span>TESTIMONIALS</span>
                        <h2>All the statements that our clients have made about us seeing our work</h2>
                    </div>

                    {display ? <OwlCarousel 
                        className="testimonials-slides owl-carousel owl-theme"
                        {...options}
                    >
                        
                        {TestimonialContent.map((val, i) => (
                            <div className={styles.singleTestimonialsCard} key={i}>
                                <div className={styles.icon}>
                                    <i className="flaticon-straight-quotes"></i>
                                </div>
                                <p>{val.feedbackText}</p>
                                <div className={styles.info}>
                                    <div className={styles.img}>
                                        <img 
                                            src={val.image} 
                                            alt={val.imageAlt} 
                                        />
                                    </div>
                                    <h3>{val.name}</h3>
                                    <span>{val.designation}</span>
                                </div>
                                <div className={styles.rating}>
                                    <i className={val.ratingIcon}></i>
                                    <i className={val.ratingIcon}></i>
                                    <i className={val.ratingIcon}></i>
                                    <i className={val.ratingIcon}></i>
                                    <i className={val.ratingIcon}></i>
                                </div>
                            </div>
                        ))}

                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default TestimonialSlider;