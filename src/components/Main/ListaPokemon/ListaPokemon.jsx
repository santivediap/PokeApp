import React from "react";
import Card from './Card'

const ListaPokemon = ({pokemons}) => {

  return <section className="search-container">
    <article className="search-results-header">
      <p>Your Pokédex:</p>
      <img src="../src/assets/pokedex.png" alt="" />
    </article>
    
    <article className="search-results-data">
      {pokemons.length?pokemons.map((pokemon, i) => <Card key={i} type={pokemon.type} name={pokemon.name} id={pokemon.id} image={pokemon.image} />):<p className="hide"></p>}
    </article>
  </section>;
};

export default ListaPokemon;
