import React from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/Common/PartnersTwo/PartnerSlider.module.css'

const options = {
    loop: false,
    nav: false,
    dots: false,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    
    responsive: {
        0: {
            items: 3
        },
        768: {
            items: 3
        },
        1200: {
            items: 5
        }
    }
};

// Partner Images
const PartnerImages = [
    {
        image: "/images/partner/partner-6.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-7.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-8.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-9.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-10.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-6.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-7.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-8.png",
        imageAlt: "Partner Image",
    },
]

const PartnerSlider = () => {

    const [display, setDisplay] = React.useState(false);
    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <>
            <div className={styles.partnerArea}>
                <div className="container">
                    <div className={styles.partnerTitle}>
                        <span>OUR TRUSTED PARTNERS</span>
                    </div>

                    {display ? <OwlCarousel 
                        className="partner-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        {PartnerImages.map((val, i) => (
                            <div className={styles.imageBox} key={i}>
                                <img 
                                    src={val.image} 
                                    alt={val.imageAlt} 
                                />
                            </div> 
                        ))}
                    </OwlCarousel> : ''}
                </div>
            </div>
        </>
    )
}

export default PartnerSlider;