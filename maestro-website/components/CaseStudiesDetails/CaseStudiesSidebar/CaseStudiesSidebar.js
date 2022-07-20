import React from 'react'
import Link from 'next/link'
import styles from '@/components/CaseStudiesDetails/CaseStudiesSidebar/CaseStudiesSidebar.module.css'

const CaseStudiesSidebar = () => {
    return (
        <>
            <div className={styles.widgetArea}>
                <div className={`${styles.widget} ${styles.widgetContact}`}> 
                    <h3 className={styles.widgetTitle}>
                        Case details
                    </h3>
                    <ul className={styles.contactList}>
                        <li><span>Client : </span>William Johnson</li>
                        <li><span>Date : </span>06/16/2021</li>
                        <li><span>Category : </span>IT Services</li>
                        <li><span>Website : </span><a href="https://themeforest.net/user/envytheme/portfolio" target="_blank">www.biza.com</a></li>
                        <li><span>Duration : </span>1 Month</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default CaseStudiesSidebar;