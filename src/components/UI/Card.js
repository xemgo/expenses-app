import React from "react";
import "./Card.css";
const Card = (props) => {
  // const classes = "card " + props.className;
  const classBır = (`card ${props.className}`) 
  return <div className={classBır}>{props.children}</div>;
}

export default Card;
