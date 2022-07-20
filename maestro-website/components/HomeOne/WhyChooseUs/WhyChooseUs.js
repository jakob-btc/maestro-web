import React from 'react'
import styles from '@/components/HomeOne/WhyChooseUs/WhyChooseUs.module.css'
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const WhyChooseUs = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />

            <div className={styles.chooseUsArea}>
                <div className="container ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.chooseUsImage}>
                                <img 
                                    src="/images/choose/choose-1.jpg" 
                                    alt="Choose Image" 
                                />

                                <div className={styles.videoView}>
                                    <div
                                        onClick={e => {e.preventDefault(); openModal()}}
                                        className={styles.videoBtn}
                                    > 
                                        <i className="ri-play-fill"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className={styles.chooseUsContent}>
                                <span>WHY CHOOSE US</span>
                                <h3>Any IT related work solution can be easily found from us</h3>
                                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec egestas non nisi. Mauris blandit aliquet elit eget tincidunt nibh pulvinar rutrum congue leo eget malesuada.</p>

                                <div className={styles.chooseInnerContent}>
                                    <div className={styles.icon}>
                                        <i className="flaticon-laptop"></i>
                                    </div>
                                    <h4>IT solution</h4>
                                    <p>Nulla porttitor accumsan tincidunt lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent sapien massa convallis a pellentesque nec egestas non nisi. Nulla porttitor accumsan tincidunt.</p>

                                    <ul className={styles.list}>
                                        <li>Praesent sapien massa, convallis a pellentesque nec.</li>
                                        <li>Nulla porttitor accumsan tincidunt.</li>
                                        <li>ivamus suscipit tortor eget felis porttitor volutpat.</li>
                                        <li>Donec rutrum congue leo eget malesuada.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs;