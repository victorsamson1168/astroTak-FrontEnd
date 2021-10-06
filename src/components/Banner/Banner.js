import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiHolder } from "../../ApiService";
import styles from "./styles.css";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  const fetchbanner = async () => {
    try {
      const response = await apiHolder.getBanner();
      if (response?.status === 200) {
        setBanner(response.data.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchbanner();
  }, []);

  const displayBanner = () => {
    return banner.map((item, index) => {
      return (
        <img
          key={item.id}
          src={item?.images?.medium?.imageUrl}
          alt="banner"
          onClick={() => {
              console.log(item.landingUrl)
            window.location.href = item?.landingUrl;
          }}
          className="bannerImage"
        />
      );
    });
  };

  return (
    <div>
      <div className="bannerContainer">{displayBanner()}</div>
    </div>
  );
};

export default Banner;
