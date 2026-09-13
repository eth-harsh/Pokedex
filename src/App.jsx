import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PreSetCard from "./components/PresetCard";
import SearchData from "./components/Search";
import PokeData from "./components/PokeData";
import SearchedData from "./components/SearchedData";
import Paragraph from "./components/Paragraph";

function App() {
  const [pokemon, setPokemon] = useState(null);

  return (
    <div className="app">
      <Navbar></Navbar>
      <Hero></Hero>
      <Paragraph></Paragraph>
      <a href="#search">
        <button className="welcome-btn">SEARCH POKEMONS</button>
      </a>
      <PreSetCard></PreSetCard>
      <SearchedData setPokemon={setPokemon} pokemon={pokemon}></SearchedData>
    </div>
  );
}

export default App;
