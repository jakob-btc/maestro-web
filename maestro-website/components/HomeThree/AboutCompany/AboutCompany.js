import React from 'react'
import Link from 'next/link'
import styles from '@/components/HomeThree/AboutCompany/AboutCompany.module.css'

const AboutCompany = () => {
    return (
        <>
            <div className={styles.aboutArea}>
                <div className="container ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.aboutImage}>
                                <img 
                                    src="/images/about/about-2.png" 
                                    alt="image" 
                                />
                                <div className={styles.imageShape1}>
                                    <img 
                                        src="/images/about/shape-1.png" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className={styles.aboutContent}>
                                <span>ABOUT OUR COMPANY</span>
                                <h3>We formed the IT service in 2005 based on client requirements</h3>
                                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <h4>Our mission</h4>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <h4>Our vision</h4>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.aboutBtn}>
                                    <Link href="/about">
                                        <a className="default-btn rounded-pill">Learn more</a>
                                    </Link>
                                    <a href="tel:15143125678" className={styles.phoneNumber}>
                                        <i className="ri-phone-fill"></i> +1 (514) 312-5678
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCompany;