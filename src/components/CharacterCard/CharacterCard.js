import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (

    <div className="card">
    <button className="img-container">
    <a onClick={() => props.selectChar(props.name)} 
        className={props.score === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"} >
      <img alt={props.name} src={props.image}/>
      </a>
    </button>
  </div>
);

export default CharacterCard;