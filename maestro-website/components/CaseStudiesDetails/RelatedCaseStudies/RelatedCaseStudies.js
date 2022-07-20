import React from 'react'
import Link from 'next/link'
import styles from '@/components/CaseStudiesDetails/RelatedCaseStudies/RelatedCaseStudies.module.css'

const RelatedCaseStudies = () => {
    return (
        <>
            <div className={styles.relatedCaseStudies}>
                <h2>Related case studies</h2>

                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className={styles.singleCaseStudiesCard}>
                            <div className={styles.caseImage}>
                                <Link href="/case-studies-details">
                                    <a>
                                        <img 
                                            src="/images/main-slides/slides-1.jpg" 
                                            alt="image" 
                                        />
                                    </a>
                                </Link>
                                <div className={styles.content}>
                                    <div className={styles.dTable}>
                                        <div className={styles.dTableCell}>
                                            <span>Creative agency</span>
                                            <h3>
                                                <Link href="/case-studies-details">
                                                    <a>Custom Web Solutions</a>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className={styles.singleCaseStudiesCard}>
                            <div className={styles.caseImage}>
                                <Link href="/case-studies-details">
                                    <a>
                                        <img 
                                            src="/images/main-slides/slides-1.jpg" 
                                            alt="image" 
                                        />
                                    </a>
                                </Link>
                                <div className={styles.content}>
                                    <div className={styles.dTable}>
                                        <div className={styles.dTableCell}>
                                            <span>Marketing</span>
                                            <h3>
                                                <Link href="/case-studies-details">
                                                    <a>Web application</a>
                                                </Link>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RelatedCaseStudies;