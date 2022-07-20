import React from 'react'
import Link from 'next/link'
import styles from '@/components/SignUp/SignUpForm.module.css'

const SignUpForm = () => {
    return (
        <>
            <div className="ptb-100">
                <div className="container">
                    <div className={styles.signUpForm}>
                        <h2>Create Your Account</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>

                        <form>
                            <div className={styles.formGroup}>
                                <label>User Name</label>
                                <input 
                                    type="text" 
                                    className={styles.formControl} 
                                    placeholder="User name" 
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Email Address</label>
                                <input 
                                    type="email" 
                                    className={styles.formControl} 
                                    placeholder="Email address" 
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

                            <div className={styles.formGroup}>
                                <label>Confirm Password</label>
                                <input 
                                    type="password" 
                                    className={styles.formControl} 
                                    placeholder="Confirm Password" 
                                />
                            </div>
                            
                            <p className={styles.description}>The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>

                            <div className={styles.signUpBtn}>
                                <button type="submit" className="default-btn">Create Account</button>
                            </div>

                            <div className={styles.accountText}>
                                <span>Already have an account? <Link href="/sign-in"><a>Sign In</a></Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpForm;