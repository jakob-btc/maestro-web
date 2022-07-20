import React from 'react'
import Link from 'next/link'
import styles from '@/components/CaseStudies/CaseStudiesStyle2/CaseStudies.module.css'

// Case Studies Content
const CaseStudiesContent = [
    {
        image: "/images/case-studies/case-1.jpg",
        imageAlt: "Case Image",
        subTitle: "Solutions",
        title: "Cyber security solutions",
        viewDetailsLink: "/case-studies-details",
    },
    {
        image: "/images/case-studies/case-2.jpg",
        imageAlt: "Case Image",
        subTitle: "Design",
        title: "Creative work",
        viewDetailsLink: "/case-studies-details",
    },
    {
        image: "/images/case-studies/case-3.jpg",
        imageAlt: "Case Image",
        subTitle: "Agency",
        title: "Ecommerce Development",
        viewDetailsLink: "/case-studies-details",
    },
    {
        image: "/images/case-studies/case-4.jpg",
        imageAlt: "Case Image",
        subTitle: "Marketing",
        title: "Digital Marketing",
        viewDetailsLink: "/case-studies-details",
    },
]

const CaseStudies = () => {
    return (
        <>
            <div className={styles.caseStudiesArea}>
                <div className="ptb-100">
                    <div className={styles.containerFluid}>
                        <div className="section-title">
                            <span>CASE STUDIES</span>
                            <h2>Recent case studies on how we have helped our clients</h2>
                        </div>

                        <div className="row">
                            {CaseStudiesContent.map((val, i) => (
                                <div className="col-lg-3 col-sm-6" key={i}>
                                    <div className={styles.singleCaseStudiesCard}>
                                        <div className={styles.caseImage}>
                                            <Link href={val.viewDetailsLink}>
                                                <a>
                                                    <img 
                                                        src={val.image} 
                                                        alt={val.imageAlt} 
                                                    />
                                                </a>
                                            </Link>
                                            <div className={styles.content}>
                                                <div className={styles.dTable}>
                                                    <div className={styles.dTableCell}>
                                                        <span>{val.subTitle}</span>
                                                        <h3>
                                                            <Link href={val.viewDetailsLink}>
                                                                <a>{val.title}</a>
                                                            </Link>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.seeAllCtn}>
                            <Link href="/case-studies">
                                <a>See more cases</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStudies;