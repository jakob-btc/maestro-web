import React from 'react'
import styles from '@/components/About/AboutContent/AboutContent.module.css'

const AboutContent = () => {
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
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className={styles.aboutImage}>
                                <img 
                                    src="/images/about/about-1.jpg" 
                                    alt="About Image" 
                                />
                                <div className={styles.sinceText}>
                                    <span>Since 2005</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContent;