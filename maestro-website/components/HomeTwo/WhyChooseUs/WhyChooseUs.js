import React from 'react'
import styles from '@/components/HomeTwo/WhyChooseUs/WhyChooseUs.module.css'

const WhyChooseUs = () => {
    return (
        <>
            <div className={styles.chooseUsArea}>
                <div className="ptb-100">
                    <div className={styles.containerFluid}>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className={styles.chooseUsImage}>
                                    <img 
                                        src="/images/choose/choose-2.jpg" 
                                        alt="image" 
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className={styles.chooseUsContent}>
                                    <span>WHY CHOOSE US</span>
                                    <h3>Any IT related work solution can be easily found from us</h3>
                                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi.</p>

                                    <div className={styles.chooseInnerContent}>
                                        <div className={styles.icon}>
                                            <i className="flaticon-solution"></i>
                                        </div>
                                        <h4>IT solution</h4>
                                        <p>Nulla porttitor accumsan tincidunt lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent sapien massa convallis a pellentesque nec egestas non nisi. Nulla porttitor accumsan tincidunt.</p>

                                        <ul className={styles.list}>
                                            <li>Praesent sapien massa, convallis a pellentesque nec.</li>
                                            <li>Nulla porttitor accumsan tincidunt.</li>
                                            <li>Ivamus suscipit tortor eget felis porttitor volutpat.</li>
                                        </ul>
                                    </div>

                                    <div className={styles.chooseInnerContent}>
                                        <div className={styles.icon}>
                                            <i className="flaticon-technical-support-1"></i>
                                        </div>
                                        <h4>Technical support</h4>
                                        <p>Nulla porttitor accumsan tincidunt lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent sapien massa convallis a pellentesque nec egestas non nisi.</p>
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

export default WhyChooseUs;