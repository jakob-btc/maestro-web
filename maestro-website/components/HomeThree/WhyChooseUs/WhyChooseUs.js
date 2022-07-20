import React from 'react'
import styles from '@/components/HomeThree/WhyChooseUs/WhyChooseUs.module.css'

const WhyChooseUs = () => {
    return (
        <>
            <div className={styles.chooseUsArea}>
                <div className="container ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.chooseUsContent}>
                                <span>WHY CHOOSE US</span>
                                <h3>Any IT related work solution can be easily found from us</h3>
                                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>

                                <div className={styles.chooseInnerContent}>
                                    <div className={styles.icon}>
                                        <i className="flaticon-technical-support-1"></i>
                                    </div>
                                    <h4>Technical support</h4>
                                    <p>Nulla porttitor accumsan tincidunt lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent sapien massa convallis a pellentesque nec egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
                                </div>

                                <div className={styles.chooseInnerContent}>
                                    <div className={styles.icon}>
                                        <i className="flaticon-laptop"></i>
                                    </div>
                                    <h4>IT solution</h4>
                                    <p>Nulla porttitor accumsan tincidunt lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent sapien massa convallis a pellentesque nec egestas non nisi. Nulla porttitor accumsan tincidunt.</p>

                                    <ul className={styles.list}>
                                        <li>Praesent sapien massa, convallis a pellentesque nec.</li>
                                        <li>Nulla porttitor accumsan tincidunt.</li>
                                        <li>Ivamus suscipit tortor eget felis porttitor volutpat.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className={styles.chooseUsImage}>
                                <img 
                                    src="/images/choose/choose-3.png" 
                                    alt="Choose Image" 
                                />
                                <div className={styles.imageShape1}>
                                    <img 
                                        src="/images/choose/shape-1.png" 
                                        alt="image" 
                                    />
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