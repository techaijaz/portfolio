import React from "react";
//import { Link } from "react-router-dom";
import "./WorkCard.css";
function WorkCard({ title, imgUrl, desc, targetUrl }) {
  return (
    <div className="workcard">
      <a target="_blank" href={targetUrl} rel="noopener noreferrer">
        <h3>{title}</h3>
        <img src={imgUrl} alt="card" className="workcard__img" />
        <p>{desc}</p>
      </a>
    </div>
  );
}

export default WorkCard;
