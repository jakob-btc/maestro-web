import React from 'react'
import Link from 'next/link'
import styles from '@/components/SignIn/SignInForm.module.css'

const SignInForm = () => {
    return (
        <>
            <div className="ptb-100">
                <div className="container">
                    <div className={styles.signInForm}>
                        <h2>Sign In Here</h2>
                        <p>Welcome back. Sign in to your account.</p>

                        <form>
                            <div className={styles.formGroup}>
                                <label>User Name or Email Address *</label>
                                <input 
                                    type="email" 
                                    className={styles.formControl} 
                                    placeholder="User name or email address" 
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Password</label>
                                <input 
                                    type="password" 
                                    className={styles.formControl} 
                                    placeholder="Password"
                                />
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-6">
                                    <div className={styles.rememberMeWrap}>
                                        <input 
                                            type="checkbox" 
                                            id="test2" 
                                        />
                                        <label htmlFor="test2">Remember me</label>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-6">
                                    <div className={styles.lostYourPasswordWrap}>
                                        <Link href="/forgot-password">
                                            <a className={styles.lostYourPassword}>Lost your password?</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.signInBtn}>
                                <button type="submit" className="default-btn">Sign In Now</button>
                            </div>

                            <div className={styles.accountText}>
                                <span>Don’t have an account? <Link href="/sign-up"><a>Create Account</a></Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInForm;