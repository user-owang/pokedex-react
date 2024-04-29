import { React, useState } from "react";
import "./App.css";
import Pokecard from "./pokecard.jsx";
import PokeDex from "./pokedex.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>PokeDex</h1>
      <PokeDex />
    </>
  );
}

export default App;
