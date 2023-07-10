import { useState, useContext } from 'react'
// import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
import PokemonsContext from './context/pokemonsContext'

function App() {

  const [pokemonsList, setPokemonsList] = useState([]);

  const pokemonsData = {
    pokemonsList,
    setPokemonsList
  }

  return (
    <>
      <PokemonsContext.Provider value={pokemonsData}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
        <Footer />
      </PokemonsContext.Provider>
    </>
  )
}

export default App
