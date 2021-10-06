import React from "react";
import styles from "./styles.css";

const CustomerReview = (props) => {
    const {testimonialData} =props;
  return (
    <div>
      <div className="reviewCardContainer">
        <p className="doubleTicks">"</p>
        <p className="reviewDescription">
          {testimonialData?.testimonial}
        </p>
        <div className="nameAddressImageContainer">
          <img
            src={testimonialData.profile_pic?testimonialData?.profile_pic:"https://www.shareicon.net/data/512x512/2016/07/05/791214_man_512x512.png"}
            alt=""
            className="reviewProfile"
          />
          <p className="reviewName">{testimonialData?.name}</p>
          <p className="reviewPlace">{testimonialData?.place}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
