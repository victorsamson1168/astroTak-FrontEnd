import React from 'react'
import styles from "./styles.css"

const Horoscope = (props) => {
    const { horoscopeData } = props;
    return (
        <div>
            <div className="horoscopeContainer">
                <img src={horoscopeData?.img} alt="" className="horoscopeImage" />
                <p className="horoscopeName">{horoscopeData?.name}</p>
                <p className="horoscopeDate">{horoscopeData?.date}</p>
            </div>
        </div>
    )
}

export default Horoscope
