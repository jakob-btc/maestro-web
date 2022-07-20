import React from 'react';
import Link from 'next/link';
import styles from '@/components/Common/PageBanner/PageBanner.module.css'

const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText, BGImage}) => {
    return (
        <>
            <div className={`${styles.pageBannerArea} ${BGImage}`}>
                <div className="container">
                    <div className={styles.pageTitleContent}>
                        <h2>{pageTitle}</h2>
                        <ul>
                            <li>
                                <Link href={homePageUrl}>
                                    <a>{homePageText}</a>
                                </Link>
                            </li>
                            <li>{activePageText}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageBanner;