import React from 'react'
import Link from 'next/link'
import styles from '@/components/HomeThree/MainBanner/MainBanner.module.css'

const MainBanner = () => {
    return (
        <>
            <div className={styles.mainBannerArea}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.mainBannerContent}>
                                <span>NEED PROFESSIONAL</span>
                                <h1>Solutions for your business</h1>
                                <p>We work with all types of IT services according to the market demand!</p>

                                <ul className={styles.bannerBtn}>
                                    <li>
                                        <Link href="/contact">
                                            <a className="default-btn rounded-pill">Contact Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a className={styles.optionalBtn}>Our Services</a>
                                        </Link>
                                    </li>
                                </ul>

                                <ul className={styles.mainBannerSocial}>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i className="ri-facebook-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i className="ri-instagram-line"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <i className="ri-linkedin-box-fill"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/" target="_blank">
                                            <i className="ri-pinterest-fill"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className={styles.mainBannerImage}>
                                {/* Large Banner Image */}
                                <img 
                                    src="/images/main-banner/banner-1.jpg" 
                                    alt="image" 
                                />

                                <div className={styles.mainBannerShape3}>
                                    <img 
                                        src="/images/main-banner/shape-2.png" 
                                        alt="image" 
                                    />
                                </div>
                                <div className={styles.mainBannerShape4}>
                                    <img 
                                        src="/images/main-banner/shape-3.png" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.mainBannerShape1}>
                    <img 
                        src="/images/main-banner/shape-1.png" 
                        alt="image" 
                    />
                </div>
                <div className={styles.mainBannerShape2}>
                    <img 
                        src="/images/main-banner/shape-1.png" 
                        alt="image" 
                    />
                </div>
            </div>
        </>
    )
}

export default MainBanner;