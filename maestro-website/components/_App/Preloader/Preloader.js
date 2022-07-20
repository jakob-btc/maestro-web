import React from 'react'
import styles from '@/components/_App/Preloader/Preloader.module.css'

const Preloader = () => {
    return (
        <>
            <div className={styles.preloader}>
                <div className={styles.loader}>
                    <div className={styles.shadow}></div>
                    <div className={styles.box}></div>
                </div>
            </div>
        </>
    )
}

export default Preloader;
