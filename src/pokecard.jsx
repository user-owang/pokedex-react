import React from "react";
import "./pokecard.css";

const Pokecard = (props) => {
  const imageurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`;
  return (
    <div className="pokecard">
      <h2 className="pokecard-name">{props.name}</h2>
      <img className="pokecard-img" src={imageurl} />
      <p>Type: {props.type}</p>
    </div>
  );
};

export default Pokecard;
