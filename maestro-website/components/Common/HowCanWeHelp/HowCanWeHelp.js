import React from 'react'
import Link from 'next/link'
import styles from '@/components/Common/HowCanWeHelp/HowCanWeHelp.module.css'

const HowCanWeHelp = () => {
    return (
        <>
            <div className={styles.technologyArea}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.technologyContent}>
                                <span>HOW CAN WE HELP YOU?</span>
                                <h3>We can help in any way in the field of IT service and technology</h3>
                                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>
            
                                <div className={styles.technologyInnerContent}>
                                    <div className={styles.number}>01</div>
                                    <h4>Monthly IT support</h4>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien pellentesque nec egestas non nisi.</p>
                                </div>

                                <div className={styles.technologyInnerContent}>
                                    <div className={styles.number}>02</div>
                                    <h4>Clear and transparent flat rates</h4>
                                    <p>Vehicula elementum sed sit amet dui. Praesent sapien massa convallis a ellentesque nec egestas non nisi.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className={styles.technologyImage}>
                                <img 
                                    src="/images/technology/technology-1.jpg" 
                                    alt="image" 
                                />
                                <div className={styles.contactBtn}>
                                    <Link href="/contact">
                                        <a className="default-btn">Contact Us</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowCanWeHelp;