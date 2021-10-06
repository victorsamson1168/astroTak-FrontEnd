import { Button } from "antd";
import React from "react";
import styles from "./styles.css";

import { PhoneOutlined } from "@ant-design/icons";

const AstrologerCardList = (props) => {
  const astrologer = props.astroDataSingle;

  return (
    <div>
      <div className="parentCardListContainer">
        <div className="imageContainerAstroList">
          <img
            className="imageAstrologer"
            src={astrologer?.profliePicUrl}
            alt=""
            style={{ width: "27vw" }}
          />
        </div>
        <div className="AstrologerDetailsContainer">
          <p className="nameAStro">
            {astrologer?.firstName} {astrologer?.lastName}
          </p>
          <p className="categories">{astrologer.skills.toString()}</p>
          <p className="languagesKnown">{astrologer.languages.toString()}</p>
          <p className="atrologerRate">
            Rs{astrologer?.minimumCallDurationCharges}/min
          </p>
          <Button
            style={{
              float: "left",
              background: "#fc944b",
              color: "white",
              borderRadius: "5px",
              marginRight: "auto",
              border: "none",
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
            }}
            size="medium"
          >
            <PhoneOutlined className="phoneIcon" />
            Talk on Call
          </Button>
        </div>
        <div className="experienceContainer">
          {astrologer?.experience} years
        </div>
      </div>
      <hr style={{width:"95vw",color:"#DCDCDC",borderTop:"#DCDCDC"}}/>
    </div>
  );
};

export default AstrologerCardList;
