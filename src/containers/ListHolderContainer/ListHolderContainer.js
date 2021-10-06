import { message } from "antd";
import React from "react";
import styles from "./styles.css";

const ListHolderContainer = (props) => {
  return (
    <div>
        <div className="listHolderContainer">
      <div className="listHolderHeader">
        <p className="holderTitle">{props.holderTitle}</p>
        <p className="seeAllButton" onClick={
            ()=>{
                props.redirect?(window.location.href=props.redirect):message.info("No redirection currently available");
            }
        }>See All </p>
      </div>
      <p className="holderDescription">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum,
        ipsam? Optio quo architecto quos nostrum earum ipsam quisquam rem?
        Dignissimos temporibus ullam eos ex id delectus odit voluptatem
        asperiores illo.
      </p>
      </div>
      <div className="anyListContainer">
          {props.children}
      </div>

    </div>
  );
};

export default ListHolderContainer;
