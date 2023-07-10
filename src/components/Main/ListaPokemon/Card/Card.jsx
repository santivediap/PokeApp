import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, id, image, type }) => {

  let fixedId = id.slice(1, id.length);
  fixedId < 10 ? fixedId = id.slice(3, id.length) : fixedId < 100 ? fixedId = id.slice(2, id.length) : "???";
  
  return <div className={`${type}-pokemon-container`}>
    <div className="pokedex-number-container">
      <img src={`../src/assets/${type}.png`} alt="type-img" />
      <p>{id}</p>
    </div>

    <img src={image} alt={`${name}'s-img`} />
    <div className="pokemon-name-container">
      <Link to={`/pokemon/${fixedId}`}>{name}</Link>
    </div>
  </div>;
};

export default Card;
