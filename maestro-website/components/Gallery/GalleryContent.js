import React from 'react'
import Lightbox from 'react-image-lightbox'
import styles from '@/components/Gallery/GalleryContent.module.css'

const images = [
    ('/images/gallery/gallery-1.jpg'),
    ('/images/gallery/gallery-2.jpg'),
    ('/images/gallery/gallery-3.jpg'),
    ('/images/gallery/gallery-4.jpg'),
    ('/images/gallery/gallery-5.jpg'),
    ('/images/gallery/gallery-6.jpg'),
    ('/images/gallery/gallery-7.jpg'),
    ('/images/gallery/gallery-8.jpg'),
    ('/images/gallery/gallery-9.jpg'),
];

const GalleryContent = () => {

    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <>
            <div className="gallery-area pt-100 pb-75">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Lightbox */}
                        {isOpenImage && (
                            <Lightbox
                                mainSrc={images[photoIndex]}
                                nextSrc={images[(photoIndex + 1) % images.length]}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                onCloseRequest={() => setIsOpenImage(false)}
                                onMovePrevRequest={() =>
                                    setPhotoIndex((photoIndex + images.length - 1) % images.length)
                                }
                                onMoveNextRequest={() =>
                                    setPhotoIndex((photoIndex + 1) % images.length)
                                }
                            />
                        )}

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles.singleGalleryItem}>
                                <div  
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                >
                                    <img 
                                        src="/images/gallery/gallery-1.jpg" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles.singleGalleryItem}>
                                <div 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                >
                                    <img 
                                        src="/images/gallery/gallery-2.jpg" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles.singleGalleryItem}>
                                <div 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                >
                                    <img 
                                        src="/images/gallery/gallery-3.jpg" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles.singleGalleryItem}>
                                <div 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                                >
                                    <img 
                                        src="/images/gallery/gallery-4.jpg" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles.singleGalleryItem}>
                                <div  
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                                >
                                    <img 
                                        src="/images/gallery/gallery-5.jpg" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles.singleGalleryItem}>
                                <div 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                                >
                                    <img 
                                        src="/images/gallery/gallery-6.jpg" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles.singleGalleryItem}>
                                <div 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(6);}}
                                >
                                    <img 
                                        src="/images/gallery/gallery-7.jpg" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles.singleGalleryItem}>
                                <div 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(7);}}
                                >
                                    <img 
                                        src="/images/gallery/gallery-8.jpg" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className={styles.singleGalleryItem}>
                                <div 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                >
                                    <img 
                                        src="/images/gallery/gallery-9.jpg" 
                                        alt="image" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryContent;