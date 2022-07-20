import React from 'react'
import Link from 'next/link'

import styles from '@/components/Pricing/PricingTable.module.css'

const PricingTable = () => {
    return (
        <>
            <div className={styles.pricingArea}>
                <div className="container pt-100 pb-75">
                    <div className="section-title">
                        <span>PRICING PLANS</span>
                        <h2>Choose the best pricing plan for your next business</h2>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className={styles.singlePricingTable}>
                                <div className={styles.pricingHeader}>
                                    <h3>Personal</h3>
                                </div>

                                <div className={styles.price}>
                                    $39 <span>/monthly</span>
                                </div>

                                <ul className={styles.featuresList}>
                                    <li><i className="ri-check-line"></i> 5 Project</li>
                                    <li><i className="ri-check-line"></i> Multi-language content</li>
                                    <li><i className="ri-check-line"></i> Quality & customer experience</li>
                                    <li><i className="ri-check-line"></i> 24/7 email support</li>
                                    <li><i className="ri-close-line"></i> Extra features</li>
                                    <li><i className="ri-close-line"></i> Upgrate options</li>
                                    <li><i className="ri-close-line"></i> Full access</li>
                                </ul>

                                <div className={styles.pricingBtn}>
                                    <Link href="/contact">
                                        <a className="default-btn w-100">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className={styles.singlePricingTable}>
                                <div className={styles.pricingHeader}>
                                    <h3>Professional</h3>
                                </div>

                                <div className={styles.price}>
                                    $69 <span>/monthly</span>
                                </div>

                                <ul className={styles.featuresList}>
                                    <li><i className="ri-check-line"></i> 5 Project</li>
                                    <li><i className="ri-check-line"></i> Multi-language content</li>
                                    <li><i className="ri-check-line"></i> Quality & customer experience</li>
                                    <li><i className="ri-check-line"></i> 24/7 email support</li>
                                    <li><i className="ri-check-line"></i> Extra features</li>
                                    <li><i className="ri-close-line"></i> Upgrate options</li>
                                    <li><i className="ri-close-line"></i> Full access</li>
                                </ul>

                                <div className={styles.pricingBtn}>
                                    <Link href="/contact">
                                        <a className="default-btn w-100">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className={styles.singlePricingTable}>
                                <div className={styles.pricingHeader}>
                                    <h3>Corporate</h3>
                                </div>

                                <div className={styles.price}>$89 <span>/monthly</span></div>

                                <ul className={styles.featuresList}>
                                    <li><i className="ri-check-line"></i> 5 Project</li>
                                    <li><i className="ri-check-line"></i> Multi-language content</li>
                                    <li><i className="ri-check-line"></i> Quality & customer experience</li>
                                    <li><i className="ri-check-line"></i> 24/7 email support</li>
                                    <li><i className="ri-check-line"></i> Extra features</li>
                                    <li><i className="ri-check-line"></i> Upgrate options</li>
                                    <li><i className="ri-check-line"></i> Full access</li>
                                </ul>

                                <div className={styles.pricingBtn}>
                                    <Link href="/contact">
                                        <a className="default-btn w-100">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Animation lines */}
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </>
    )
}

export default PricingTable;