import React from 'react'
import styles from '@/components/Common/NewsletterForm/NewsletterForm.module.css'

const NewsletterForm = () => {
    return (
        <>
            <div className="container">
                <div className={styles.newsletterInnerBox}>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className={styles.newsletterContent}>
                                <h3>Subscribe to us to get update news & tips in your inbox</h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form className={styles.newsletterForm}>
                                <input 
                                    type="email" 
                                    className={styles.inputNewsletter} 
                                    placeholder="Email address..." 
                                    name="EMAIL" 
                                    required 
                                />
                                <button 
                                type="submit" 
                                className={styles.defaultBtn}
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsletterForm;