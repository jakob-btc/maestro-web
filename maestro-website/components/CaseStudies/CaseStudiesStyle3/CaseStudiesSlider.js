import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import styles from '@/components/CaseStudies/CaseStudiesStyle3/CaseStudiesSlider.module.css'

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 500,
    margin: 25,
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        1200: {
            items: 2
        }
    }
};

// Case Studies Content
const CaseStudiesContent = [
    {
        image: "/images/case-studies/case-10.jpg",
        imageAlt: "Case image",
        subTitle: "Web solutions",
        title: "Cyber security solutions",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
    }, 
    {
        image: "/images/case-studies/case-11.jpg",
        imageAlt: "Case image",
        subTitle: "Web design",
        title: "Custom web solutions",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
    }, 
    {
        image: "/images/case-studies/case-4.jpg",
        imageAlt: "Case image",
        subTitle: "Development",
        title: "Web development",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
    }, 
    {
        image: "/images/case-studies/case-1.jpg",
        imageAlt: "Case image",
        subTitle: "Design",
        title: "UX case studies",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
    }, 
    {
        image: "/images/case-studies/case-2.jpg",
        imageAlt: "Case image",
        subTitle: "Web case",
        title: "IT system improvements",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
    }, 
    {
        image: "/images/case-studies/case-3.jpg",
        imageAlt: "Case image",
        subTitle: "Marketing",
        title: "Digital marketing",
        shortDescription: "Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Mauris blandit aliquet.",
        learnMoreText: "Learn more",
        learnMoreLink: "/case-studies-details",
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
                <div className="container ptb-100">
                    <div className="section-title-wrap">
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

                    {display ? <OwlCarousel 
                        className="case-studies-slides-two owl-carousel owl-theme"
                        {...options}
                    > 
                        {CaseStudiesContent.map((val, i) => (
                            <div className={styles.singleCaseStudiesBox} key={i}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className={styles.caseImage}>
                                            <img 
                                                src={val.image} 
                                                alt={val.imageAlt} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className={styles.caseContent}>
                                            <span>{val.subTitle}</span>
                                            <h3>
                                                <Link href={val.learnMoreLink}>
                                                    <a>{val.title}</a>
                                                </Link>
                                            </h3>
                                            <p>{val.shortDescription}</p>

                                            <Link href={val.learnMoreLink}>
                                                <a className={styles.caseBtn}>
                                                    {val.learnMoreText}
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default CaseStudiesSlider;