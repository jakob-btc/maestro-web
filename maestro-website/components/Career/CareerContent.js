import React from 'react'
import Link from 'next/link'

import styles from '@/components/Career/CareerContent.module.css'
import ApplyForm from './ApplyForm/ApplyForm'

// Career Info Content
const CareerInfoContent = [
    {
        title: "Team Lead - Digital Marketing",

        education: "Education:",
        educationText: "BBA / M.A.",

        experience: "Experience:",
        experienceText: "At least 5 years",

        deadline: "Deadline:",
        date: "July 30, 2021",

        viewDetailsText: "Details",
        viewDetailsLink: "/career-details",
    },
    {
        title: "Senior ASP.Net Core Developer",

        education: "Education:",
        educationText: "CSE / M.A.",

        experience: "Experience:",
        experienceText: "At least 5 years",

        deadline: "Deadline:",
        date: "Aug 02, 2021",

        viewDetailsText: "Details",
        viewDetailsLink: "/career-details",
    },
    {
        title: "Android Developer",

        education: "Education:",
        educationText: "CSE / M. Sc.",

        experience: "Experience:",
        experienceText: "At least 3 years",

        deadline: "Deadline:",
        date: "Aug 05, 2021",

        viewDetailsText: "Details",
        viewDetailsLink: "/career-details",
    },
    {
        title: "Graphic Designer",

        education: "Education:",
        educationText: "UI/UX / M.A.",

        experience: "Experience:",
        experienceText: "At least 3 years",

        deadline: "Deadline:",
        date: "Aug 10, 2021",

        viewDetailsText: "Details",
        viewDetailsLink: "/career-details",
    },
    {
        title: "Digital Marketing Executive",

        education: "Education:",
        educationText: "UI/UX / M.A.",

        experience: "Experience:",
        experienceText: "At least 7 years",

        deadline: "Deadline:",
        date: "Aug 20, 2021",

        viewDetailsText: "Details",
        viewDetailsLink: "/career-details",
    },
]

const CareerContent = () => {
    return (
        <>
            <div className="career-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className={styles.careerItemContent}>
                                <h3>We're looking for</h3>
                                
                                {CareerInfoContent.map((val, i) => (
                                    <div className={styles.careerBox} key={i}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-sm-6">
                                                <div className={styles.careerContent}>
                                                    <h4>{val.title}</h4>
                                                    <p><span>{val.education}</span> {val.educationText}</p>
                                                    <p><span>{val.experience}</span> {val.experienceText}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-sm-6">
                                                <div className={styles.careerBtn}>
                                                    <Link href={val.viewDetailsLink}>
                                                        <a className="default-btn">{val.viewDetailsText}</a>
                                                    </Link>
                                                    <p><span>{val.deadline}</span> {val.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <ApplyForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CareerContent;