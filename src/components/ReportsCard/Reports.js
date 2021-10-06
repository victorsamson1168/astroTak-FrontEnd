import { Button } from 'antd'
import React from 'react'
import styles from "./styles.css"


const Reports = (props) => {
   const {reportData}=props;
    return (
        <div>
            <div className="reportsCardContainer">
                <img src={reportData.imageUrl} alt="" className="reportsBackgroungImage" style={{width:"100%",height:"100%",objectFit:"contain"}} />
                <div className="rateAndButtonContainer">
                    <p className="reportsRate">₹ {reportData.price}</p>
                    <Button  style={{ background: "#fc944b", color: "white",borderRadius:"5px" }} size="small">Buy Now</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Reports
