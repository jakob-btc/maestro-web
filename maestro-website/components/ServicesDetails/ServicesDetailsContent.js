import React from 'react'
import styles from '@/components/ServicesDetails/ServicesDetailsContent.module.css'
import ServicesSidebar from './ServicesSidebar/ServicesSidebar'

const ServicesDetailsContent = () => {
    return (
        <>
            <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className={styles.servicesDetailsContent}>
                                <span>IT CONSULTANCY</span>
 
                                <h1>The challenge you face</h1>
                               
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula. Quisque velit nisi pretium ut lacinia in elementum id enim. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.</p>
                                <p>Mauris blandit aliquet elit eget tincidunt nibh pulvinar Curabitur arcu erat accumsan id imperdiet et, porttitor at sem. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Vivamus suscipit tortor eget felis portt itor volutpat. Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat.</p>

                                <div className={styles.img}>
                                    <img 
                                        src="/images/services-details-1.jpg" 
                                        alt="image" 
                                    />
                                </div>
                            
                                <h3>How IT consultants will grow my business</h3>
                                <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                                <p>Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit eget tincidunt nibh pulvinar a. Curabitur arcu erat accumsan id imperdiet et porttitor at sem.</p>
 
                                <div className={styles.img}>
                                    <img 
                                        src="/images/services-details-2.jpg" 
                                        alt="image" 
                                    />
                                </div>

                                <h3>Why choose Biza IT consultancy?</h3>
                                <p>Praesent sapien massa convallis a pellentesque nec egestas non nisi. Proin eget tortor risus donec sollicitudin molestie malesuada. Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.</p>
                                <p>Sed porttitor lectus nibh Nulla porttitor accumsan tincidunt Vivamus magna justo lacinia eget consectetur sed convallis at tellus Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo lacinia eget consectetur.</p>
                                <p>Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula. ullamcorper sit amet ligula.</p>

                                <h4>Biza IT consultancy work process</h4>
                                <p>Praesent sapien massa convallis a pellentesque nec egestas non nisi. Proin eget tortor risus donec sollicitudin molestie malesuada. Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Cras ultricies ligula sed magna dictum porta. Curabitur aliquet quam id dui posuere blandit.</p>

                                <ul>
                                    <li>Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt.</li>
                                    <li>Vivamus magna justo lacinia eget consectetur sed convallis at tellus.</li>
                                    <li>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.</li>
                                    <li>Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula.</li>
                                    <li>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar eget consectetur.</li>
                                </ul>

                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <ServicesSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesDetailsContent;