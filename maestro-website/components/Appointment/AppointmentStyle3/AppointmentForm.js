import React, { useState } from "react"
import DatePicker from "react-datepicker"
import styles from '@/components/Appointment/AppointmentStyle3/AppointmentForm.module.css'
import Faq from "./Faq";
 

const AppointmentForm = () => {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <Faq />
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
        </>
    )
}

export default AppointmentForm;