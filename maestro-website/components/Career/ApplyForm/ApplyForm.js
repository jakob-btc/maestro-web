import React from 'react'
import Link from 'next/link'

import styles from '@/components/Career/ApplyForm/ApplyForm.module.css'

const ApplyForm = () => {
    return (
        <>
            <div className={styles.careerFormWrap}>
                <div className={styles.content}>
                    <h3>Apply for Job</h3>
                </div>
                
                <form className={styles.careerForm}>
                    <div className={styles.formGroup}>
                        <input 
                            type="text" 
                            className={styles.formControl} 
                            placeholder="Enter your name" 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="text" 
                            className={styles.formControl} 
                            placeholder="Email address" 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="text" 
                            className={styles.formControl} 
                            placeholder="Enter phone" 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input 
                            type="text" 
                            className={styles.formControl} 
                            placeholder="Portfolio link" 
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <select className="form-select">
                            <option value="1">Job Category</option>
                            <option value="2">Team Lead - Digital Marketing</option>
                            <option value="3">Senior ASP.Net Core Developer</option>
                            <option value="4">Android Developer</option>
                            <option value="5">Graphic Designer</option>
                            <option value="6">Digital Marketing Executive</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <textarea 
                            name="message" 
                            className={styles.formControl} 
                            placeholder="Write message..."
                        ></textarea>
                    </div>

                    <div className={styles.submitBtn}>
                        <button type="submit" className="default-btn">Apply</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ApplyForm;