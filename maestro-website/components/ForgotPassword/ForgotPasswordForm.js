import React from 'react'
import Link from 'next/link'
import styles from '@/components/ForgotPassword/ForgotPasswordForm.module.css'

const ForgotPasswordForm = () => {
    return (
        <>
            <div className="ptb-100">
                <div className="container">
                    <div className={styles.forgotPasswordForm}>
                        <h2>Forgot Password</h2>
                        <p>Please enter your email address below and we will send you information to change your password.</p>

                        <form>
                            <div className={styles.formGroup}>
                                <label>Email Address</label>
                                <input 
                                    type="email" 
                                    className={styles.formControl} 
                                    placeholder="Email address" 
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>New Password</label>
                                <input 
                                    type="password" 
                                    className={styles.formControl} 
                                    placeholder="New Password"
                                />
                            </div>
                 
                            <div className={styles.signInBtn}>
                                <button type="submit" className="default-btn">Reset</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPasswordForm;