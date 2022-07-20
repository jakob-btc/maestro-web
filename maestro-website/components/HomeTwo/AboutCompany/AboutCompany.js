import React from 'react'
import Link from 'next/link'
import styles from '@/components/HomeTwo/AboutCompany/AboutCompany.module.css'
import FunFact from './FunFact'

const AboutCompany = () => {
    return (
        <>
            <div className={styles.aboutArea}>
                <div className="container ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.aboutContent}>
                                <span>ABOUT OUR COMPANY</span>
                                <h3>We formed the IT service in 2005 based on client requirements</h3>
                                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>

                                <div className="row">
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <div className={styles.icon}>
                                                <i className="flaticon-customer-service"></i>
                                            </div>
                                            <h4>24/7 User support</h4>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                        <div className={styles.contentBox}>
                                            <div className={styles.icon}>
                                                <i className="flaticon-experience"></i>
                                            </div>
                                            <h4>16 Years of experience</h4>
                                            <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.aboutBtn}>
                                    <Link href="/about">
                                        <a className="default-btn">Learn more</a>
                                    </Link>
                                    <a href="tel:15143125678" className={styles.phoneNumber}>
                                        <i className="ri-phone-fill"></i> +1 (514) 312-5678
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <FunFact />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutCompany;