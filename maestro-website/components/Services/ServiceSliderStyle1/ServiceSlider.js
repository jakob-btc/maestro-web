import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/Services/ServiceSliderStyle1/ServiceSlider.module.css'

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 500,
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
            items: 4
        }
    }
};

// Service Card Content
const ServiceCardContent = [
    {
        iconName: "flaticon-consulting",
        title: "IT Consultancy",
        shortDescription: "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo lacinia eget consectetur sed convallis at tellus.",
        viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-product-design",
        title: "Product Development",
        shortDescription: "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo lacinia eget consectetur sed convallis at tellus.",
        viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-technical-support",
        title: "IT Support",
        shortDescription: "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo lacinia eget consectetur sed convallis at tellus.",
        viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-cyber-security",
        title: "Cyber Security",
        shortDescription: "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo lacinia eget consectetur sed convallis at tellus.",
        viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-mobile-app",
        title: "App Development",
        shortDescription: "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo lacinia eget consectetur sed convallis at tellus.",
        viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-ux-design",
        title: "UX/UI Design",
        shortDescription: "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo lacinia eget consectetur sed convallis at tellus.",
        viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-web-development",
        title: "Web Development",
        shortDescription: "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo lacinia eget consectetur sed convallis at tellus.",
        viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-digital-marketing",
        title: "Digital Marketing",
        shortDescription: "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo lacinia eget consectetur sed convallis at tellus.",
        viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
    {
        iconName: "flaticon-web-development",
        title: "IT Solution",
        shortDescription: "Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo lacinia eget consectetur sed convallis at tellus.",
        viewDetailsLinkText: "Learn more",
        viewDetailsLink: "/services-details", 
    },
]

const ServiceSlider = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className={styles.servicesArea}>
                <div className="container ptb-100">
                    <div className="section-title">
                        <span>WE PROVIDE SERVICES</span>
                        <h2 className={styles.colorWhite}>The kind of services that our company provides to our clients</h2>
                    </div>
 
                    {display ? <OwlCarousel 
                        className="services-slides owl-carousel owl-theme"
                        {...options}
                    >
                        {ServiceCardContent.map((val, i) => (
                            <div className={styles.singleServicesCard} key={i}>
                                <div className={styles.icon}>
                                    <i className={val.iconName}></i>
                                </div>
                                <h3>
                                    <Link href={val.viewDetailsLink}>
                                        <a>{val.title}</a>
                                    </Link>
                                </h3>
                                <p>{val.shortDescription}</p>
                                <Link href={val.viewDetailsLink}>
                                    <a className={styles.servicesBtn}>
                                        {val.viewDetailsLinkText}
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </OwlCarousel> : ''}
                </div>
            </div> 
        </>
    )
}

export default ServiceSlider;