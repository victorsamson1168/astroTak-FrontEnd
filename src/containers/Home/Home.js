import React, { useState, useEffect } from "react";
import Header from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { apiHolder } from "../../ApiService.js";
import { message } from "antd";
import Astrologer from "../../components/AstrologerCard/Astrologer";
import styles from "./styles.css";
import Reports from "../../components/ReportsCard/Reports";
import Question from "../../components/Question/Question";
import Banner from "../../components/Banner/Banner";
import Horoscope from "../../components/Horoscope/Horoscope";
import CustomerReview from "../../components/CustomerReview/CustomerReview";
import ListHolderContainer from "../ListHolderContainer/ListHolderContainer";
import ganesha from "../../assets/ganesha.png";

const Home = () => {
  const [astro, setAstro] = useState([]);
  const [reports, setReports] = useState([]);
  const [horoscope, setHoroscope] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  const AstrologerList = () => {
    return astro.map((item) => {
      return <Astrologer astroData={item} />;
    });
  };
  const ReportsList = () => {
    return reports.map((item) => {
      return <Reports reportData={item} />;
    });
  };
  const TestimonialList = () => {
    return testimonials.map((item) => {
      return <CustomerReview testimonialData={item} />;
    });
  };
  const HoroscopeList = () => {
    return horoscope.map((item) => {
      return <Horoscope horoscopeData={item} />;
    });
  };

  const fetchAstro = async () => {
    try {
      const response = await apiHolder.getAstro();
      if (response?.status === 200) {
        setAstro(response.data.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchReports = async () => {
    try {
      const response = await apiHolder.getReports();
      if (response?.status === 200) {
        setReports(response.data.data.services);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchHoroscope = async () => {
    try {
      const response = await apiHolder.getHoroscope();
      if (response?.status === 200) {
        setHoroscope(response.data.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetchTestimonial = async () => {
    try {
      const response = await apiHolder.getTestimonial();
      if (response?.status === 200) {
        setTestimonials(response.data.data);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchAstro();
    fetchReports();
    fetchHoroscope();
    fetchTestimonial();
    console.log(window.screen.width);
  }, []);
  return (
    <div>
      <Header></Header>

      <img src={ganesha} alt="bannerganesha" className="ganesha" />

      <Banner></Banner>

      <ListHolderContainer holderTitle="Daily Horoscope">
        <div className="cardParentContainer">{HoroscopeList()}</div>
      </ListHolderContainer>

      <ListHolderContainer
        holderTitle="Talk to an Astrologer"
        redirect="/talk-to-astrologer"
      >
        <div className="cardParentContainer">{AstrologerList()}</div>
      </ListHolderContainer>

      <ListHolderContainer holderTitle="Reports">
        <div className="cardParentContainer">{ReportsList()}</div>
      </ListHolderContainer>

      <ListHolderContainer holderTitle="Ask a Question">
        <Question></Question>
      </ListHolderContainer>

      <p className="customerReviewHeading">Hear from our Happy Customers!</p>
      <div className="cardParentContainer">{TestimonialList()}</div>

      <p className="copyRight">© Copyright 2021 all rights reserved</p>

      <br />
      <br />
      <br />

      <Footer></Footer>
    </div>
  );
};

export default Home;
