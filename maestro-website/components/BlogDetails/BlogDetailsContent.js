import React from 'react'
import Link from 'next/link'
import styles from '@/components/BlogDetails/BlogDetailsContent.module.css'
import BlogSidebar from './BlogSidebar/BlogSidebar'

const BlogDetailsContent = () => {
    return (
        <>
            <div className="pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className={styles.blogDetailsDesc}>
                                <div className={styles.articleContent}>
                                    <div className={styles.articleImage}>
                                        <img 
                                            src="/images/blog-details.jpg" 
                                            alt="image" 
                                        />
                                    </div>
                                    <ul className={styles.entryMeta}>
                                        <li>14 June, 2021</li>
                                        <li>by: <Link href="/author"><a>Brandy</a></Link></li>
                                        <li>(02) Comments</li>
                                    </ul>

                                    <h2>How is technology working with new things?</h2>
                         
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                                    <blockquote className={styles.blockquote}>
                                        <i className="flaticon-straight-quotes"></i>
                                        <p>Aenean sollicitudin lorem biendum auctor nisi elit consequat ipsum nec sagittis sem nibh id elit. Duis sedo odio sit amet nibh doy.</p>
                                    </blockquote>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>

                                {/* Social share */}
                                <div className={styles.articleShare}>
                                    <ul>
                                        <li><span>Share:</span></li>
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com" target="_blank">
                                                <i className="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="ri-instagram-line"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" target="_blank">
                                                <i className="ri-linkedin-line"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Comments */}
                                <div className={styles.articleComments}>
                                    <h3>(02) Comments</h3>
                                    
                                    <div className={styles.commentsList}>
                                        <div className={styles.img}>
                                            <img 
                                                src="/images/blog/user1.jpg" 
                                                alt="image" 
                                            />
                                        </div>
                                        <h5>Thomas Bunch</h5>
                                        <span>Co Founder & CEO</span>
                                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis bibendum auctor nisi elit consequat ipsum nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</p>

                                        <a href="#" className={styles.replyBtn}>
                                            <i className="ri-reply-line"></i> Reply
                                        </a>
                                    </div>
        
                                    <div className={styles.commentsList}>
                                        <div className={styles.img}>
                                            <img 
                                                src="/images/blog/user2.jpg" 
                                                alt="image" 
                                            />
                                        </div>
                                        <h5>Gladys Wells</h5>
                                        <span>Head of HR</span>
                                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem.</p>
                                        
                                        <a href="#" className={styles.replyBtn}>
                                            <i className="ri-reply-line"></i> Reply
                                        </a>
                                    </div>
                                </div>

                                {/* Comment Form */}
                                <div className={styles.articleLeaveComment}>
                                    <h3>Leave a reply</h3>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    
                                    <form>
                                        <div className="row justify-content-center">
                                            <div className="col-lg-6 col-md-12">
                                                <div className={styles.formGroup}>
                                                    <input 
                                                        type="text" 
                                                        className={styles.formControl} 
                                                        placeholder="Enter name" 
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                <div className={styles.formGroup}>
                                                    <input 
                                                        type="text" 
                                                        className={styles.formControl} 
                                                        placeholder="Email Address" 
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className={styles.formGroup}>
                                                    <input 
                                                        type="text" 
                                                        className={styles.formControl} 
                                                        placeholder="Website" 
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <div className={styles.formGroup}>
                                                    <textarea 
                                                        name="message" 
                                                        rows="6"
                                                        className={styles.formControl} 
                                                        placeholder="Comment"
                                                    ></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12">
                                                <button type="submit" className="default-btn">Post a comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            {/* Blog Sidebar */}
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetailsContent;