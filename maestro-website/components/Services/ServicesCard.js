import React from 'react'
import Link from 'next/link'
import styles from '@/components/Services/ServicesCard.module.css'

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
]

const ServicesCard = () => {
    return (
        <>
            <div className="services-area pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span>WE PROVIDE SERVICES</span>
                        <h2>The kind of services that our company provides to our clients</h2>
                    </div>

                    <div className="row justify-content-center">
                        {ServiceCardContent.map((val, i) => (
                            <div className="col-lg-3 col-md-6" key={i}>
                                <div className={styles.singleServicesCard}>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCard;