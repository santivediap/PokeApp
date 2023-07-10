import React, { useState, useContext } from "react";
import Search from "../Search/Search";
import ListaPokemon from "../ListaPokemon/ListaPokemon";
import PokemonsContext from "../../../context/pokemonsContext";

const SearchPokemon = () => {

  const { pokemonsList, setPokemonsList } = useContext(PokemonsContext)

  return <>
    <Search pokemons={pokemonsList} setPokemons={setPokemonsList} />
    {pokemonsList.length ? <ListaPokemon/> : <p className="hide"></p>}
  </>
};

export default SearchPokemon;
