import React from 'react'
import styles from '@/components/Testimonials/TestimonialsContent.module.css'

// Testimonials Info Content
const TestimonialsInfoContent = [
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
        image: "/images/testimonials/testimonials-2.jpg",
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
    {
        image: "/images/testimonials/testimonials-3.jpg",
        imageAlt: "Client Image",
        name: "MM Kelia",
        designation: "React Developer",
        feedbackText: "Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Nulla quis lorem libero malesuada feugiat. Donec sollicitudin molestie Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh.",
        ratingIcon1: "ri-star-fill",
        ratingIcon2: "ri-star-fill",
        ratingIcon3: "ri-star-fill",
        ratingIcon4: "ri-star-fill",
        ratingIcon5: "ri-star-fill",
    },
]

const TestimonialsContent = () => {
    return (
        <>
            <div className="testimonials-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span>TESTIMONIALS</span>
                        <h2>All the statements that our clients have made about us seeing our work</h2>
                    </div>

                    <div className="row justify-content-center">
                        {TestimonialsInfoContent.map((val, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className={styles.singleTestimonialsCard}>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestimonialsContent;