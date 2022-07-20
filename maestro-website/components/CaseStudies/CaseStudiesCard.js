import React from 'react'
import Link from 'next/link'
import styles from '@/components/CaseStudies/CaseStudiesCard.module.css'

// Case Studies Content
const CaseStudiesContent = [
    {
        image: "/images/case-studies/case-1.jpg",
        imageAlt: "Case image",
        subTitle: "Web solutions",
        title: "Cyber security solutions",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
    }, 
    {
        image: "/images/case-studies/case-2.jpg",
        imageAlt: "Case image",
        subTitle: "Web design",
        title: "Custom web solutions",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
    }, 
    {
        image: "/images/case-studies/case-3.jpg",
        imageAlt: "Case image",
        subTitle: "Development",
        title: "Web development",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
    }, 
    {
        image: "/images/case-studies/case-4.jpg",
        imageAlt: "Case image",
        subTitle: "Design",
        title: "UX case studies",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
    }, 
    {
        image: "/images/case-studies/case-5.jpg",
        imageAlt: "Case image",
        subTitle: "Web case",
        title: "IT system improvements",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
    }, 
    {
        image: "/images/case-studies/case-6.jpg",
        imageAlt: "Case image",
        subTitle: "Marketing",
        title: "Digital marketing",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
    }, 
]

const CaseStudiesCard = () => {
    return (
        <>
            <div className="pt-100 pb-75">
                <div className="container">
                    <div className="section-title">
                        <span>CASE STUDIES</span>
                        <h2>Recent case studies on how we have helped our clients</h2>
                    </div>

                    <div className="row">
                        {CaseStudiesContent.map((val, i) => (
                            <div className="col-lg-6" key={i}>
                                <div className={styles.singleCaseStudiesBox}>
                                    <div className="row align-items-center">
                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                            <div className={styles.caseImage}>
                                                <img 
                                                    src={val.image} 
                                                    alt={val.imageAlt} 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-12 col-md-6">
                                            <div className={styles.caseContent}>
                                                <span>{val.subTitle}</span>
                                                <h3>
                                                    <Link href={val.learnMoreLink}>
                                                        <a>{val.title}</a>
                                                    </Link>
                                                </h3>
                                                <p>{val.shortDescription}</p>
                                                <Link href={val.learnMoreLink}>
                                                    <a className={styles.caseBtn}>
                                                        {val.learnMoreText}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
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

export default CaseStudiesCard;