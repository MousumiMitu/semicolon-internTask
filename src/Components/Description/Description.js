import React, { useState } from "react";
import "./Description.css";

const Description = (props) => {
  const [visible, setVisible] = useState(false);
  const { heading, discription } = props.data;
  console.log(props.data);
  return (
    <div className="description-area">
      <div className="d-flex justify-content-between">
        <h2>{heading}</h2>
        <button className="click-btn" onClick={() => setVisible(!visible)}>
          {visible ? <i class="fas fa-times"></i> : <i class="fas fa-plus"></i>}
        </button>
      </div>
      <div>{visible ? <p>{discription}</p> : null}</div>
    </div>
  );
};

export default Description;
