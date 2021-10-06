import { Button, Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./styles.css";
import { CaretDownOutlined } from "@ant-design/icons";
import { apiHolder } from "../../ApiService";

const Question = () => {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = async () => {
    const response = await apiHolder.getQuestions();
    if (response?.status === 200) {
      setQuestions(response.data.data);
    } else {
      console.log("something went wrong");
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const menu = (
    <Menu
    >
      {questions.map((question) => (
        <Menu.Item key={question.id}>{question.name}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <div className="questionContainer">
        <p className="title">Choose category</p>
        <Dropdown overlay={menu} className="dropDown">
          <Button style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Select a category: Love,career ,more</span>
            <CaretDownOutlined />
          </Button>
        </Dropdown>
        <div className="buttonContinerQuestion">
          <p className="questionRate">
            <strong>₹ 99</strong>(including GST)
          </p>
          <div className="rightButtonContainer">
            <p className="ideasWhatToAsk">Ideas What to ask</p>
            <Button
              style={{
                background: "#fc944b",
                color: "white",
                borderRadius: "5px",
              }}
              className="buttonAskQuestion"
              size="small"
            >
              Ask a question
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
