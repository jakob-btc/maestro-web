import React from 'react'
import styles from '@/components/Contact/Map/GoogleMap.module.css'

const GoogleMap = () => {
    return (
        <>
            <div className={styles.map}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.491712980941!2d-115.07586998444268!3d36.00828421957246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d1f3788f6e97%3A0x2e98f2baae0d3579!2s413%20Carmel%20Mesa%20Dr%2C%20Henderson%2C%20NV%2089012%2C%20USA!5e0!3m2!1sen!2sbd!4v1627964294099!5m2!1sen!2sbd"></iframe>
            </div>
        </>
    )
}

export default GoogleMap;