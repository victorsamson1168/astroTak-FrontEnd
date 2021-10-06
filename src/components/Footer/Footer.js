import React from "react";
import styles from "./styles.css";
import home from "../../assets/home.png";
import talk from "../../assets/talk.png";
import ask from "../../assets/ask.png";
import reports from "../../assets/reports.png";
import { message } from "antd";

const Navbar = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="iconContainer" onClick={
          () => {
            window.location.href = "/home";
          }
        }>
          <img src={home} className="image"></img>
          <p className="label">Home</p>
        </div>
        <div className="iconContainer" onClick={
          () => {
            window.location.href = "/talk-to-astrologer";
          }
        }>
          <img src={talk} className="image"></img>
          <p className="label">Talk To Astrologer</p>
        </div>
        <div className="iconContainer" onClick={
          () => {
            message.error("Coming Soon");
          }
        }>
          <img src={ask} className="image"></img>
          <p className="label">Ask Question</p>
        </div>
        <div className="iconContainer" onClick={
          () => {
            message.error("Coming Soon");
          }
        }>
          <img src={reports} className="image"></img>
          <p className="label">Reports</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
