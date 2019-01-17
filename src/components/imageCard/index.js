import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)} />
      </div>
  );
}

export default ImageCard;
