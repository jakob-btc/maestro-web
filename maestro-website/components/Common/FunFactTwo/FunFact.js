import React from 'react'
import styles from '@/components/Common/FunFactTwo/FunFact.module.css'

const FunFactContent = [
    {
        iconName: "flaticon-user-experience",
        number: "15",
        title: "Years of Experience",
    },
    {
        iconName: "flaticon-customers",
        number: "600",
        title: "Global Clients",
    },
    {
        iconName: "flaticon-complete",
        number: "850",
        title: "Delivered Products",
    },
    {
        iconName: "flaticon-award",
        number: "12",
        title: "Winning Awards",
    }
]

const FunFact = () => {
    return (
        <>
            <div className="container">
                <div className={styles.funfactInnerBox}>
                    <div className="row justify-content-center pt-100 pb-75">
                        {FunFactContent.map((val, i) => (
                            <div className="col-lg-3 col-sm-6 col-6" key={i}>
                                <div className={styles.singleFunfactCard}>
                                    <div className={styles.icon}>
                                        <i className={val.iconName}></i>
                                    </div>
                                    <h3>
                                        {val.number} <span className={styles.signIcon}>+</span>
                                    </h3>
                                    <p>{val.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FunFact;