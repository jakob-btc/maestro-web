import React from 'react'
import Link from 'next/link'
import styles from '@/components/CaseStudiesDetails/CaseStudiesDetailsContent.module.css'
import RelatedCaseStudies from './RelatedCaseStudies/RelatedCaseStudies'
import CaseStudiesSidebar from './CaseStudiesSidebar/CaseStudiesSidebar';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

const CaseStudiesDetailsContent = () => {
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

            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className={styles.caseStudiesDetails}>
                                <h2>Cyber security solutions</h2>
        
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat.</p>
                           
                                <div className={styles.img}>
                                    <img 
                                        src="/images/case-studies-details-1.jpg" 
                                        alt="image" 
                                    />
                                </div>
 
                                <h2>Introduction</h2>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula. Quisque velit nisi pretium ut lacinia in elementum id enim. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                                <p>Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit eget tincidunt nibh pulvinar curabitur arcu erat accumsan id imperdiet et porttitor at sem.</p>

                                <div className="p-2 d-none d-md-block"></div>
                         
                                <h2>Challenges and goals</h2>
                                <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.</p>
                                <p>Sed porttitor lectus nibh nulla porttitor accumsan tincidunt. Vivamus magna justo lacinia eget consectetur sed convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula. Mauris blandit aliquet elit eget tincidunt nibh pulvinar vivamus magna justo lacinia eget consectetur.</p>
                        
                                <div className={styles.videoInro}>
                                    <img 
                                        src="/images/case-studies-details-1.jpg" 
                                        alt="image" 
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
 
                                <h2>Result</h2>
                                <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.</p>
                                <p>Sed porttitor lectus nibh nulla porttitor accumsan tincidunt. Vivamus magna justo lacinia eget consectetur sed convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula. Mauris blandit aliquet elit eget tincidunt nibh pulvinar vivamus magna justo lacinia eget consectetur.</p>
                            </div>

                            {/* Related Case Studies */}
                            <RelatedCaseStudies />
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <CaseStudiesSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseStudiesDetailsContent;