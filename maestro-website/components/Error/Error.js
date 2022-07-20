import React from 'react'
import Link from 'next/link'
import styles from '@/components/Error/Error.module.css'

const Error = () => {
    return (
        <>
            <div className="error-area ptb-100">
                <div className="container">
                    <div className={styles.errorContent}>
                        <img 
                            src="/images/error.png"
                            alt="image" 
                        />
                        <h3>Error 404 : page not found</h3>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                        <Link href="/">
                            <a className="default-btn mt-20">Back to Homepage</a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error;