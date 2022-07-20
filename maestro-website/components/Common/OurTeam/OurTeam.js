import React from 'react'
import Link from 'next/link'
import styles from '@/components/Common/OurTeam/OurTeam.module.css'

// Team Card Content
const TeamCardContent = [
    {
        image: "/images/team/team-1.jpg",
        imageAlt: "Team image",
        name: "Albina Josef",
        designation: "President", 

        fbIcon: "ri-facebook-line",
        fbLink: "https://www.facebook.com/",

        twiIcon: "ri-twitter-fill",
        twiLink: "https://twitter.com/",

        insIcon: "ri-instagram-fill",
        insLink: "https://www.instagram.com/",

        linIcon: "ri-linkedin-fill",
        linLink: "https://www.linkedin.com/",
    },
    {
        image: "/images/team/team-2.jpg",
        imageAlt: "Team image",
        name: "Kathryn Pino",
        designation: "Head of HR", 

        fbIcon: "ri-facebook-line",
        fbLink: "https://www.facebook.com/",

        twiIcon: "ri-twitter-fill",
        twiLink: "https://twitter.com/",

        insIcon: "ri-instagram-fill",
        insLink: "https://www.instagram.com/",

        linIcon: "ri-linkedin-fill",
        linLink: "https://www.linkedin.com/",
    },
    {
        image: "/images/team/team-3.jpg",
        imageAlt: "Team image",
        name: "Robert Pease",
        designation: "Delivery Director", 

        fbIcon: "ri-facebook-line",
        fbLink: "https://www.facebook.com/",

        twiIcon: "ri-twitter-fill",
        twiLink: "https://twitter.com/",

        insIcon: "ri-instagram-fill",
        insLink: "https://www.instagram.com/",

        linIcon: "ri-linkedin-fill",
        linLink: "https://www.linkedin.com/",
    },
    {
        image: "/images/team/team-4.jpg",
        imageAlt: "Team image",
        name: "Felicia Jones",
        designation: "Business Development", 

        fbIcon: "ri-facebook-line",
        fbLink: "https://www.facebook.com/",

        twiIcon: "ri-twitter-fill",
        twiLink: "https://twitter.com/",

        insIcon: "ri-instagram-fill",
        insLink: "https://www.instagram.com/",

        linIcon: "ri-linkedin-fill",
        linLink: "https://www.linkedin.com/",
    },
];

const OurTeam = () => {
    return (
        <>
            <div className="team-area pb-75">
                <div className="container">
                    <div className="section-title">
                        <span>OUR TEAM</span>
                        <h2>We are a team of IT services and technologies specialists</h2>

                        <div className={styles.seeMoreBtn}>
                            <Link href="/team">
                                <a>See more Team</a>
                            </Link>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {TeamCardContent.map((val, i) => (
                            <div className="col-lg-3 col-sm-6" key={i}>
                                <div className={styles.singleTeamCard}>
                                    <div className={styles.teamImage}>
                                        <img 
                                            src={val.image} 
                                            alt={val.imageAlt} 
                                        />

                                        <ul className={styles.actionList}>
                                            <li>
                                                <a href={val.fbLink} target="_blank">
                                                    <i className={val.fbIcon}></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={val.twiLink} target="_blank">
                                                    <i className={val.twiIcon}></i>
                                                </a>
                                            </li>
                                            <li>
                                            <a href={val.insLink} target="_blank">
                                                    <i className={val.insIcon}></i>
                                                </a>
                                            </li>
                                            <li>
                                            <a href={val.linLink} target="_blank">
                                                    <i className={val.linIcon}></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className={styles.teamContent}>
                                        <h3>{val.name}</h3>
                                        <span>{val.designation}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeam;