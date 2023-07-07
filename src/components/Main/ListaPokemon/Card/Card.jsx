import React from "react";
// import { dark } from '../../../../assets/dark.png'

const Card = ({ name, id, image, type }) => {
  return <div className={`${type}-pokemon-container`}>
    <div className="pokedex-number-container">
      <img src={`../src/assets/${type}.png`} alt="type-img" />
      <p>{id}</p>
    </div>

    <img src={image} alt={`${name}'s-img`} />

    <div className="pokemon-name-container">
      <h2>{name}</h2>
    </div>
  </div>;
};

export default Card;
