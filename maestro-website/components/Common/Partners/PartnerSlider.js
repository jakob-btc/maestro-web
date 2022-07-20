import React from 'react'
import dynamic from 'next/dynamic'
const OwlCarousel = dynamic(import('react-owl-carousel3'))
import styles from '@/components/Common/Partners/PartnerSlider.module.css'

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
        image: "/images/partner/partner-1.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-2.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-3.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-4.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-5.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-1.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-2.png",
        imageAlt: "Partner Image",
    },
    {
        image: "/images/partner/partner-3.png",
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
                <div className="ptb-100">
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
            </div>
        </>
    )
}

export default PartnerSlider;