import { Button } from 'antd'
import React from 'react'
import styles from "./styles.css"


const Astrologer = (props) => {
    const {astroData}=props;
    return (
        <div>
            <div className="cardContainer">
                <img src={astroData.profliePicUrl} alt="astro-profile" className="astroImage"/>
                <div className="nameContainer">
                    <p className="name">{astroData?.firstName+" "+astroData?.lastName}</p>
                    <p className="rating">{astroData?.rating}</p>
                </div>
                <p className="description">{astroData.aboutMe}</p>
                <div className="timeContainer">
                    <p className="time">₹{astroData?.minimumCallDurationCharges}<br></br>/min</p>
                    <Button  style={{ background: "#fc944b", color: "white",borderRadius:"10px" }}>Talk Now</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Astrologer
