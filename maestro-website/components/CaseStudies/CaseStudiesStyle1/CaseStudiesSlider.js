import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/CaseStudies/CaseStudiesStyle1/CaseStudiesSlider.module.css'

const options = {
    loop: false,
    nav: true,
    dots: false,
    margin: 0,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right'></i>"
    ],
    responsive: {
        0: {
            items: 1
        },
        575: {
            items: 2
        },
        768: {
            items: 2
        },
        1200: {
            items: 4
        }
    }
};

// Case Studies Content
const CaseStudiesContent = [
    {
        image: "/images/case-studies/case-1.jpg",
        imageAlt: "Case studies",
        subTitle: "Web case",
        title: "Cyber security solutions",
        viewDetailsLink: "/case-studies-details",
    },
    {
        image: "/images/case-studies/case-2.jpg",
        imageAlt: "Case studies",
        subTitle: "Design",
        title: "Creative work",
        viewDetailsLink: "/case-studies-details",
    },
    {
        image: "/images/case-studies/case-3.jpg",
        imageAlt: "Case studies",
        subTitle: "Agency",
        title: "Ecommerce development",
        viewDetailsLink: "/case-studies-details",
    },
    {
        image: "/images/case-studies/case-4.jpg",
        imageAlt: "Case studies",
        subTitle: "Web",
        title: "Web application",
        viewDetailsLink: "/case-studies-details",
    },
    {
        image: "/images/case-studies/case-5.jpg",
        imageAlt: "Case studies",
        subTitle: "Explanation",
        title: "Web development",
        viewDetailsLink: "/case-studies-details",
    },
    {
        image: "/images/case-studies/case-6.jpg",
        imageAlt: "Case studies",
        subTitle: "Creative",
        title: "Creative web design",
        viewDetailsLink: "/case-studies-details",
    },
    {
        image: "/images/case-studies/case-7.jpg",
        imageAlt: "Case studies",
        subTitle: "App",
        title: "App development",
        viewDetailsLink: "/case-studies-details",
    },
    {
        image: "/images/case-studies/case-8.jpg",
        imageAlt: "Case studies",
        subTitle: "React",
        title: "Dashboard app",
        viewDetailsLink: "/case-studies-details",
    },
]

const CaseStudiesSlider = () => {
    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])
    return (
        <>
            <div className={styles.caseStudiesArea}>
                <div className="ptb-100">
                    <div className="container">
                        <div className="section-title-wrap white-color">
                            <div className="row">
                                <div className="col-lg-8">
                                    <span>CASE STUDIES</span>
                                    <h2>Recent case studies on how we have helped our clients</h2>
                                </div>
                                <div className="col-lg-4">
                                    <div className="see-more-btn">
                                        <Link href="/case-studies">
                                            <a>See more cases</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid overflow-hidden">
                        {display ? <OwlCarousel 
                            className="case-studies-slides owl-carousel owl-theme"
                            {...options}
                        >
                            {CaseStudiesContent.map((val, i) => (
                                <div className={styles.singleCaseStudiesCard} key={i}>
                                    <div className={styles.caseImage}>
                                        <Link href={val.viewDetailsLink}>
                                            <a>
                                                <img 
                                                    src={val.image} 
                                                    alt={val.imageAlt}  
                                                />
                                            </a>
                                        </Link>
                                        <div className={styles.content}>
                                            <div className={styles.dTable}>
                                                <div className={styles.dTableCell}>
                                                    <span>
                                                        {val.subTitle}
                                                    </span>
                                                    <h3>
                                                        <Link href={val.viewDetailsLink}>
                                                            <a>{val.title}</a>
                                                        </Link>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel> : ''}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStudiesSlider;