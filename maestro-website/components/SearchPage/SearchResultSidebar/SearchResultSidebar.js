import React from 'react'
import Link from 'next/link'
import styles from '@/components/SearchPage/SearchResultSidebar/SearchResultSidebar.module.css'

const BlogSidebar = () => {
    return (
        <>
            <div className={styles.widgetArea}>
                <div className={`${styles.widget} ${styles.widgetSearch}`}>
                    <form className={styles.searchForm}>
                        <input 
                            type="search" 
                            className={styles.searchField} 
                            placeholder="Search here..." 
                        />
                        <button type="submit">
                            <i className="ri-search-line"></i>
                        </button>
                    </form>
                </div>
                 
                <div className={`${styles.widget} ${styles.widgetServices}`}>
                    <h3 className={styles.widgetTitle}>Categories</h3>

                    <ul className={styles.servicesList}>
                        <li>
                            <Link href="/blog">
                                <a>IT Consultancy <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Product Development <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>IT Support <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Cyber Security <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Mobile App Development <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>UX/UI Design <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Web Development <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Digital Marketing <i className="ri-arrow-right-s-line"></i></a>
                            </Link>
                        </li>
                    </ul>
                </div>
 
                <div className={`${styles.widget} ${styles.widgetPostsThumb}`}>
                    <h3 className={styles.widgetTitle}>Recent Post</h3>

                    <article className={styles.item}>
                        <Link href="/blog-details">
                            <a className={styles.thumb}>
                                <span className={`${styles.fullimage} ${styles.bg1}`} role="img"></span>
                            </a>
                        </Link>
                        <div className={styles.info}>
                            <h4 className={styles.title}>
                                <Link href="/blog-details">
                                    <a>Some important tips about IT services and technology</a>
                                </Link>
                            </h4>
                            <span>12 July, 2021</span>
                        </div>
                    </article>

                    <article className={styles.item}>
                        <Link href="/blog-details">
                            <a className={styles.thumb}>
                                <span className={`${styles.fullimage} ${styles.bg2}`} role="img"></span>
                            </a>
                        </Link>
                        <div className={styles.info}>
                            <h4 className={styles.title}>
                                <Link href="/blog-details">
                                    <a>What are the benefits of IT support service and technology?</a>
                                </Link>
                            </h4>
                            <span>12 July, 2021</span>
                        </div>
                    </article>

                    <article className={styles.item}>
                        <Link href="/blog-details">
                            <a className={styles.thumb}>
                                <span className={`${styles.fullimage} ${styles.bg3}`} role="img"></span>
                            </a>
                        </Link>
                        <div className={styles.info}>
                            <h4 className={styles.title}>
                                <Link href="/blog-details">
                                    <a>Some important solutions of web development</a>
                                </Link>
                            </h4>
                            <span>12 July, 2021</span>
                        </div>
                    </article>
                </div>

                <div className={`${styles.widget} ${styles.widgetTagCloud}`}>
                    <h3 className={styles.widgetTitle}>Tag Cloud</h3>

                    <div className={styles.tagcloud}>
                        <Link href="/blog">
                            <a>IT services</a>
                        </Link>
                        <Link href="/blog">
                            <a>Technology</a>
                        </Link>
                        <Link href="/blog">
                            <a>Consulting</a>
                        </Link>
                        <Link href="/blog">
                            <a>Cyber</a>
                        </Link>
                        <Link href="/blog">
                            <a>IT support</a>
                        </Link>
                        <Link href="/blog">
                            <a>App development</a>
                        </Link>
                        <Link href="/blog">
                            <a>Digital marketing</a>
                        </Link>
                        <Link href="/blog">
                            <a>UX/UI</a>
                        </Link>
                    </div>
                </div>

                <div className={`${styles.widget} ${styles.widgetContact}`}>
                    <h3 className={styles.widgetTitle}>Contact us</h3>

                    <ul className={styles.contactList}>
                        <li><span>Address : </span>413 Mesa Drive North Las Vegas, NV 89032</li>
                        <li><span>Phone : </span><a href="tel:15143125678">+1 (514) 312-5678</a></li>
                        <li><span>Email : </span><a href="mailto:hello@biza.com">hello@biza.com</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default BlogSidebar;