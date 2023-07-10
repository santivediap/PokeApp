import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Details = () => {

  const { id } = useParams()

  const [pokemonData, setPokemonData] = useState({})
  const [params, setParams] = useSearchParams()

  useEffect(() => {
    async function searchPokemon() {
      let result;

      await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(pokemonData => {
        setParams({
          name: pokemonData.data.name,
          image_url: pokemonData.data.sprites.other["official-artwork"].front_default,
          typeOne: pokemonData.data.types[0].type.name,
          typeTwo: pokemonData.data.types[1] ? pokemonData.data.types[1].type.name : null
        })
  
        result = {...pokemonData.data}
      })

      await axios.get(`https://pokeapi.co/api/v2/characteristic/${id}`)
      .then(pokemonData => {
        const description = pokemonData.data.descriptions[7].description
        result = {...result, description}
      })
      .catch(err => {
        // Error
      })
      setPokemonData(result)
    }
    searchPokemon()
  }, [])

  return <section className={`${params.get("typeOne")}-details-container`}>
    {pokemonData.name ? <>
      <article className="general-details">
      <h2>{`${params.get("name")} - ${id < 10 ? `#00${id}` : id < 100 ? `#0${id}` : `#${id}`}`}</h2>
      <img src={params.get("image_url")} alt="pokemon-img" />

      <div className="pokemon-types">
        <p className={`${params.get("typeOne")}-type`}>{params.get("typeOne")}</p>
        { params.get("typeTwo") == "null" ? <p className="hide"></p> : <p className={`${params.get("typeTwo")}-type`}>{params.get("typeTwo")}</p>}
      </div>

      <p>{pokemonData.description}</p>
    </article>

    <article className="specific-details">

      <h2>About</h2>

      <div className="first-details">
        <div className="info-container">
          <img src="../src/assets/height-ruler.png" alt="height-img" />
          <p>{`${pokemonData.height/10} m`}</p>
        </div>

        <div className="info-container">
          <img src="../src/assets/peso.png" alt="height-img" />
          <p>{`${pokemonData.weight/10} kg`}</p>
        </div>

      </div>

      <div className="specific-info">
        <div className="data">
          <h2>HP:</h2>
          <p>{pokemonData.stats[0].base_stat}/100</p>
        </div>

        <div className="data">
          <h2>ATK:</h2>
          <p>{pokemonData.stats[1].base_stat}/100</p>
        </div>

        <div className="data">
          <h2>DEF:</h2>
          <p>{pokemonData.stats[2].base_stat}/100</p>
        </div>

        <div className="data">
          <h2>SATK:</h2>
          <p>{pokemonData.stats[3].base_stat}/100</p>
        </div>

        <div className="data">
          <h2>SDEF:</h2>
          <p>{pokemonData.stats[4].base_stat}/100</p>
        </div>

        <div className="data">
          <h2>SPD:</h2>
          <p>{pokemonData.stats[5].base_stat}/100</p>
        </div>
        
      </div>

    </article></> : <p>No hay pokemon</p>}

  </section>;
};

export default Details;
