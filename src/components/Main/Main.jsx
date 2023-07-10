import React, { useState } from "react";
import Home from './Home'
import SearchPokemon from "./SearchPokemon/SearchPokemon";
import Details from "./Details/Details";
import { Routes, Route } from 'react-router-dom';

const Main = () => {

  return <main>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/search" element={<SearchPokemon/>} />
      <Route path="/pokemon/:id" element={<Details/>} />
    </Routes>
  </main>;
};

export default Main;
