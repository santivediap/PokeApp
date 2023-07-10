import React, { useState } from "react";
import Home from './Home'
import SearchPokemon from "./SearchPokemon/SearchPokemon";
import { Routes, Route } from 'react-router-dom';

const Main = () => {

  return <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search" element={<SearchPokemon/>} />
    </Routes>
  </main>;
};

export default Main;
