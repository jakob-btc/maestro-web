import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/HomeTwo/HeroSlider/HeroSlider.module.css'

const options = {
    loop: true,
    nav: true,
    dots: true,
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
        subTitle: "NEED PROFESSIONAL",
        title: "We work with all types of IT services according to the market demand",
        contactBtnText: "Contact Us",
        contactBtnLink: "/contact",
        servicesBtnText: "Our Services",
        servicesBtnLink: "/services",
        bgImage: "/images/hero-slides/slides-bg-1.jpg"
    },
    {
        subTitle: "NEED PROFESSIONAL",
        title: "The right team to provide the best IT services",
        contactBtnText: "Contact Us",
        contactBtnLink: "/contact",
        servicesBtnText: "Our Services",
        servicesBtnLink: "/services",
        bgImage: "/images/hero-slides/slides-bg-2.jpg"
    },
    {
        subTitle: "NEED PROFESSIONAL",
        title: "One-stop solution to all of your IT services and technology",
        contactBtnText: "Contact Us",
        contactBtnLink: "/contact",
        servicesBtnText: "Our Services",
        servicesBtnLink: "/services",
        bgImage: "/images/hero-slides/slides-bg-3.jpg"
    },
];

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
];

const HeroSlider = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
           <div className={styles.heroSlidesArea}>
                <div className={styles.containerFluid}>
                    {display ? <OwlCarousel 
                        className="hero-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {SliderContent.map((val, i) => (
                            <div 
                                className={`${styles.heroSlidesItem} ${styles.bgImg1}`} key={i} 
                                style={{ 
                                    backgroundImage: `url(${val.bgImage})` 
                                }}
                            >
                                <div className={styles.heroSlidesContent}>
                                    <span>{val.subTitle}</span>
                                    <h1>{val.title}</h1>
                                    <ul className={styles.slidesBtn}>
                                        <li>
                                            <Link href={val.contactBtnLink}>
                                                <a className="default-btn">
                                                    {val.contactBtnText}
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={val.servicesBtnText}>
                                                <a className={styles.optionalBtn}>
                                                    {val.servicesBtnText}
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel> : ''}
                </div>
                
                {/* Social Links */}
                {/* Social Links */}
                <ul className={styles.heroSlidesSocial}>
                    {SocialLinks.map((val, i) => (
                        <li key={i}>
                            <a href={val.Url} target="_blank">
                                <i className={val.iconName}></i>
                            </a>
                        </li>
                    ))}
                </ul> 

                <div className={styles.heroSlidesEmail}>
                    <a href="mailto:contact@biza.com">contact@biza.com</a>
                </div>

                <div className={styles.heroSlidesTime}>
                    <span><i className="ri-time-line"></i> Mon - Sat 9:00am - 9:00pm</span>
                </div>
            </div>
        </>
    )
}

export default HeroSlider;