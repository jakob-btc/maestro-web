import React from 'react'
import Link from 'next/link'
import styles from '@/components/Common/OurBlog/OurBlog.module.css'

// Blog Card Content
const BlogCardContent = [
    {
        image: "/images/blog/blog-1.jpg",
        imageAlt: "Blog Image",
        title: "How is technology working with new things?",
        date: "14 June, 2021",
        author: "Brandy",
        authorLink: "/author",
        viewDetailsLink: "/blog-details",
    },
    {
        image: "/images/blog/blog-2.jpg",
        imageAlt: "Blog Image",
        title: "Top 10 important tips on IT services & technology",
        date: "15 June, 2021",
        author: "Garcia",
        authorLink: "/author",
        viewDetailsLink: "/blog-details",
    },
    {
        image: "/images/blog/blog-3.jpg",
        imageAlt: "Blog Image",
        title: "What are the benefits of IT support service and technology?",
        date: "14 June, 2021",
        author: "Williams",
        authorLink: "/author",
        viewDetailsLink: "/blog-details",
    },
]

const OurBlog = () => {
    return (
        <>
            <div className={styles.blogArea}>
                <div className="container pt-100 pb-75">
                    <div className="section-title">
                        <span>OUR BLOG</span>
                        <h2>Read our latest news & blog which is updated regularly</h2>
                    </div>

                    <div className="row justify-content-center">
                        {BlogCardContent.map((val, i) => (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className={styles.singleBlogCard}>
                                    <div className={styles.postImage}>
                                        <Link href={val.viewDetailsLink}>
                                            <a>
                                                <img 
                                                    src={val.image} 
                                                    alt={val.imageAlt} 
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className={styles.postContent}>
                                        <ul className={styles.entryMeta}>
                                            <li>{val.date}</li>
                                            <li>by: <Link href={val.authorLink}><a>{val.author}</a></Link></li>
                                        </ul>
                                        <h3>
                                            <Link href={val.viewDetailsLink}>
                                                <a>{val.title}</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurBlog;