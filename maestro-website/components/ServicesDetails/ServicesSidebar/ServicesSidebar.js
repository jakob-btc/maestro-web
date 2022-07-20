import React from 'react'
import Link from 'next/link'

import styles from '@/components/ServicesDetails/ServicesSidebar/ServicesSidebar.module.css'

const ServicesSidebar = () => {
    return (
        <>
            <div className={styles.widgetArea}>
                <div className={`${styles.widget} ${styles.widgetServices}`}>

                    <h3 className={styles.widgetTitle}>All Services</h3>

                    <ul className={styles.servicesList}>
                        <li>
                            <Link href="/services-details">
                                <a>IT Consultancy <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>Product Development <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>IT Support <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>Cyber Security <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>Mobile App Development <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>UX/UI Design <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>Web Development <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services-details">
                                <a>Digital Marketing <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={`${styles.widget} ${styles.widgetContact}`}> 
                    <h3 className={styles.widgetTitle}>Contact us for any services</h3>

                    <ul className={styles.contactList}>
                        <li><span>Address : </span>413 Mesa Drive North Las Vegas, NV 89032</li>
                        <li><span>Phone : </span><a href="tel:15143125678">+1 (514) 312-5678</a></li>
                        <li><span>Email : </span><a href="mailto:hello@biza.com">hello@biza.com</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ServicesSidebar;