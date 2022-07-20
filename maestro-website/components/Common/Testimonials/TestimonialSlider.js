import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/Common/Testimonials/TestimonialSlider.module.css'

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
            items: 3
        }
    }
};

// Testimonials Content
const TestimonialsContent = [
    {
        image: "/images/testimonials/testimonials-1.jpg",
        imageAlt: "Client Image",
        name: "Samuel Glenn",
        designation: "Co Founder & CEO",
        feedbackText: "Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem libero malesuada feugiat. Donec sollicitudin molestie Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.",
        ratingIcon1: "ri-star-fill",
        ratingIcon2: "ri-star-fill",
        ratingIcon3: "ri-star-fill",
        ratingIcon4: "ri-star-fill",
        ratingIcon5: "ri-star-fill",
    },
    {
        image:"/images/testimonials/testimonials-2.jpg",
        imageAlt: "Client Image",
        name: "Thomas Bunch",
        designation: "Head of HR",
        feedbackText: "Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem libero malesuada feugiat. Donec sollicitudin molestie Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.",
        ratingIcon1: "ri-star-fill",
        ratingIcon2: "ri-star-fill",
        ratingIcon3: "ri-star-fill",
        ratingIcon4: "ri-star-fill",
        ratingIcon5: "ri-star-fill",
    },
    {
        image: "/images/testimonials/testimonials-3.jpg",
        imageAlt: "Client Image",
        name: "Gladys Wells",
        designation: "React Developer",
        feedbackText: "Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem libero malesuada feugiat. Donec sollicitudin molestie Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.",
        ratingIcon1: "ri-star-fill",
        ratingIcon2: "ri-star-fill",
        ratingIcon3: "ri-star-fill",
        ratingIcon4: "ri-star-fill",
        ratingIcon5: "ri-star-fill",
    },
    {
        image: "/images/testimonials/testimonials-4.jpg",
        imageAlt: "Client Image",
        name: "Olivia",
        designation: "CEO Abc Company",
        feedbackText: "Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem libero malesuada feugiat. Donec sollicitudin molestie Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.",
        ratingIcon1: "ri-star-fill",
        ratingIcon2: "ri-star-fill",
        ratingIcon3: "ri-star-fill",
        ratingIcon4: "ri-star-fill",
        ratingIcon5: "ri-star-fill",
    },
    {
        image: "/images/testimonials/testimonials-5.jpg",
        imageAlt: "Client Image",
        name: "Amelia",
        designation: "UX Designer",
        feedbackText: "Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem libero malesuada feugiat. Donec sollicitudin molestie Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.",
        ratingIcon1: "ri-star-fill",
        ratingIcon2: "ri-star-fill",
        ratingIcon3: "ri-star-fill",
        ratingIcon4: "ri-star-fill",
        ratingIcon5: "ri-star-fill",
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
                    <div className="section-title-wrap">
                        <div className="row">
                            <div className="col-lg-8">
                                <span>TESTIMONIALS</span>
                                <h2>All the statements that our clients have made about us seeing our work</h2>
                            </div>
                            <div className="col-lg-4">
                                <div className="see-more-btn">
                                    <Link href="/testimonials">
                                        <a>See more testimonials</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {display ? <OwlCarousel 
                        className="testimonials-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {TestimonialsContent.map((val, i) => (
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
                                    <i className={val.ratingIcon1}></i>
                                    <i className={val.ratingIcon2}></i>
                                    <i className={val.ratingIcon3}></i>
                                    <i className={val.ratingIcon4}></i>
                                    <i className={val.ratingIcon5}></i>
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