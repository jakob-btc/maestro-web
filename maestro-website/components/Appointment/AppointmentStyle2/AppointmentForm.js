import React, { useState } from "react"
import DatePicker from "react-datepicker"
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});
import styles from '@/components/Appointment/AppointmentStyle2/AppointmentForm.module.css'

const AppointmentForm = () => {

    const [startDate, setStartDate] = useState(new Date());

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

            <div className={styles.appointmentArea}>
                <div className="container ptb-100">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className={styles.appointmentVideo}>
                                <div
                                    onClick={e => {e.preventDefault(); openModal()}}
                                    className={styles.videoBtn}
                                > 
                                    <i className="ri-play-fill"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className={styles.appointmentFormWrap}>
                                <div className={styles.content}>
                                    <h3>Make an appointment</h3>
                                </div>
                                
                                <form className={styles.appointmentForm}>
                                    <div className={styles.formGroup}>
                                        <input 
                                            type="text" 
                                            className={styles.formControl} 
                                            placeholder="Enter your name" 
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <input 
                                            type="text" 
                                            className={styles.formControl}  
                                            placeholder="Email address" 
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <DatePicker 
                                            selected={startDate} 
                                            onChange={(date) => setStartDate(date)} 
                                            className={styles.formControl} 
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <div className={styles.formSelect}>
                                            <select className="form-select" aria-label="Default select example">
                                                <option>Select service</option>
                                                <option defaultValue="1">Software development</option>
                                                <option defaultValue="2">Website development</option>
                                                <option defaultValue="3">Social media marketing</option>
                                                <option defaultValue="4">Competitor research</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <textarea 
                                            name="message" 
                                            className={styles.formControl} 
                                            placeholder="Write message..."
                                            rows="5"
                                        ></textarea>
                                    </div>
                                    <button 
                                        type="submit" 
                                        className="default-btn border-0 w-100"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentForm;