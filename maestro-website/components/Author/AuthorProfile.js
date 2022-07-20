import React from 'react'
import Link from 'next/link'
import styles from "@/components/Author/AuthorProfile.module.css"
 
const AuthorProfile = () => {
    return (
        <>
            <div className={styles.authorProfile}>
                <div className={styles.img}>
                    <img 
                        src="/images/author.jpg" 
                        alt="Profile" 
                    />
                </div>
                
                <h3>Brandy</h3>
                <p>Praesent sapien massa convallis a pellentesque nec egestas non nisi. Proin eget tortor risus donec sollicitudin molestie malesuada. Curabitur arcu erat accumsan id imperdiet et porttitor at sem.</p>

                <ul>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank">
                            <i className="ri-facebook-line"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/" target="_blank">
                            <i className="ri-twitter-line"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <i className="ri-linkedin-line"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank">
                            <i className="ri-instagram-line"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AuthorProfile;