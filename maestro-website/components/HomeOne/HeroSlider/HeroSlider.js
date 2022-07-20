import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/HomeOne/HeroSlider/HeroSlider.module.css'

const options = {
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    autoplay: true,
    items: 1,
    margin: 25,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right'></i>"
    ],
};

// Slider Content
const SliderContent = [
    {
        image: "/images/main-slides/slides-1.jpg",
        imageAlt: "Slider Image",
        subTitle: "NEED PROFESSIONAL",
        title: "IT Support & Services",
        shortDescription: "In any case of IT service, we provide unlimited support. When you need contact with us!",
        contactBtnText: "Contact Us",
        contactBtnUrl: "/contact",
        servicesBtnText: "Our Services",
        servicesBtnUrl: "/services",
    },
    {
        image: "/images/main-slides/slides-2.jpg",
        imageAlt: "Slider Image",
        subTitle: "NEED PROFESSIONAL",
        title: "IT Security & Solutions",
        shortDescription: "In any case of IT service, we provide unlimited support. When you need contact with us!",
        contactBtnText: "Contact Us",
        contactBtnUrl: "/contact",
        servicesBtnText: "Our Services",
        servicesBtnUrl: "/services",
    },
]

// Social Links
const SocialLinks = [
    {
        iconName: "ri-facebook-fill",
        Url: "https://www.facebook.com/",
    },
    {
        iconName: "ri-twitter-fill",
        Url: "ri-twitter-fill",
    },
    {
        iconName: "ri-instagram-fill",
        Url: "https://www.instagram.com/",
    },
    {
        iconName: "ri-linkedin-fill",
        Url: "https://www.linkedin.com/",
    },
]

const HeroSlider = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className={styles.mainSlidesArea}>
                {/* Slider */}
                <div className="container">
                    {display ? <OwlCarousel 
                        className="home-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        {SliderContent.map((val, i) => (
                            <div className="main-slides-item" key={i}>
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-7 col-md-12">
                                        <div className={styles.mainSlidesImage}>
                                            <img 
                                                src={val.image} 
                                                alt={val.imageAlt} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12">
                                        <div className={styles.mainSlidesContent}>
                                            <span>
                                                {val.subTitle}
                                            </span>
                                            <h1>
                                                {val.title}
                                            </h1>
                                            <p>
                                                {val.shortDescription}
                                            </p>
                                            <ul className={styles.slidesBtn}>
                                                <li>
                                                    <Link href={val.contactBtnUrl}>
                                                        <a className="default-btn">
                                                            {val.contactBtnText}
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href={val.servicesBtnUrl}>
                                                        <a className={styles.optionalBtn}>
                                                            {val.servicesBtnText}
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel> : ''}
                </div>
                
                {/* Social Links */}
                <ul className={styles.mainSlidesSocial}>
                    {SocialLinks.map((val, i) => (
                        <li key={i}>
                            <a href={val.Url} target="_blank">
                                <i className={val.iconName}></i>
                            </a>
                        </li>
                    ))}
                </ul>
                
                {/* Email Address */}
                <div className={styles.mainSlidesEmail}>
                    <a href="mailto:contact@biza.com">contact@biza.com</a>
                </div>
            </div>
        </>
    )
}

export default HeroSlider;