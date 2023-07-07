import React, { useState } from "react";
import Search from './Search'
import ListaPokemon from './ListaPokemon'

const Main = () => {

  const [ pokemons, setPokemons ] = useState([])

  return <main>
    <Search pokemons={pokemons} setPokemons={setPokemons} />
    {pokemons.length ? <ListaPokemon pokemons={pokemons}/> : <p className="hide"></p>}
  </main>;
};

export default Main;
