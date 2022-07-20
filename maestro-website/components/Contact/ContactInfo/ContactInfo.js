import React from 'react'
import styles from '@/components/Contact/ContactInfo/ContactInfo.module.css'

const ContactInfo = () => {
    return (
        <>
            <div className={styles.contactGetInTouch}>
                <h3>Get in touch</h3>

                <div className={styles.innerBox}>
                    <div className={styles.icon}>
                        <i className="flaticon-pin"></i>
                    </div>
                    <span>Address :</span>
                    <p>413 Mesa Drive North Las Vegas, NV 89032</p>
                </div>

                <div className={styles.innerBox}>
                    <div className={styles.icon}>
                        <i className="flaticon-call"></i>
                    </div>
                    <span>Phone :</span>
                    <p><a href="tel:15143125678">+1 (514) 312-5678</a></p>
                </div>

                <div className={styles.innerBox}>
                    <div className={styles.icon}>
                        <i className="flaticon-email"></i>
                    </div>
                    <span>Email :</span>
                    <p><a href="mailto:hello@biza.com">hello@biza.com</a></p>
                </div>
            </div>
        </>
    )
}

export default ContactInfo;