import React, { useContext } from "react";
import Card from './Card'
import PokemonsContext from "../../../context/pokemonsContext";

const ListaPokemon = () => {

  const { pokemonsList, setPokemonsList } = useContext(PokemonsContext)

  return <section className="search-container">
    <article className="search-results-header">
      <p>Your Pokédex:</p>
      <img src="../src/assets/pokedex.png" alt="" />
    </article>
    
    <article className="search-results-data">
      {pokemonsList.length?pokemonsList.map((pokemon, i) => <Card key={i} type={pokemon.type} name={pokemon.name} id={pokemon.id} image={pokemon.image} />):<p className="hide"></p>}
    </article>
  </section>;
};

export default ListaPokemon;
