import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = ({pokemons, setPokemons}) => {

  const [ inputValue, setInputValue ] = useState("")
  const [ debouncer, setDebouncer ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState("")

  useEffect(() => {
    clearTimeout(debouncer)

    if(inputValue.length > 0) {
      setDebouncer(setTimeout(() => {
        searchPokemons(inputValue)
      }, 2000))
    }

  }, [inputValue])

  // Manages form input changes
  const changeInput = (e) => {
    setInputValue(e.target.value)
  }

  // Submits form
  const submitForm = async (e) => {
    e.preventDefault()

    if(e.target.pokemon.value.length < 1) {
      newError("You must type something! >:(")
    } else {
      searchPokemons(e.target.pokemon.value)
      .then(result => {
        if(result == true) {
          e.target.pokemon.value = ""
          setInputValue("")
        }
      })
      .catch(err => newError("Not found! :("))
    }
  }

  // Generates custom error message below search input
  const newError = (errMessage) => {
    setErrorMessage(errMessage)

    setTimeout(() => {
      setErrorMessage("")
    }, 3000);
  }

  // Search Pokemons via HTTP Request
  const searchPokemons = async (pokemon) => {
    let repeated;

    return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
    .then(search => {

      const getPokemon = search.data
      const pokemonData = {
        name: getPokemon.name,
        id: getPokemon.id < 10 ? `#00${getPokemon.id}` : getPokemon.id < 100 ? `#0${getPokemon.id}` : `#${getPokemon.id}`,
        image: getPokemon.sprites.other["official-artwork"].front_default,
        type: getPokemon.types[0].type.name
      }

      if(pokemons.length < 1) {
        setPokemons([...pokemons, pokemonData])
      } else {
        for(let i = 0; i < pokemons.length; i++) {

          if(pokemons[i].name.toLowerCase() ==  pokemon.toLowerCase()) {
            repeated = true;
            break;
          }
          repeated = false
        }
        
        if(repeated == true) {
          newError("You already searched this Pokemon! :/");
        } else {
          setPokemons([...pokemons, pokemonData])
        }
      }
      return true;
    })
    .catch(err => {
      newError("Not found! :(")
    })
  }

  return <section className="container">

    <h2>Search Pokemon</h2>

    <form className="pokemon-search" onSubmit={submitForm}>
      <div className="pokemon-search-container">
        <input onChange={changeInput} placeholder="E.g: Pikachu" type="text" name="pokemon"/>
        <button className="search-button" type="submit">Submit</button>
      </div>
    </form>

    {/* Displays error message */}
    { errorMessage.length ? <p className="error">{ errorMessage }</p> : <p className="hide"></p> }

  </section>;
};

export default Search;
