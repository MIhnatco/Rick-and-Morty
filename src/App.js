import { useState, useEffect } from "react";
import "./App.scss";

import Character from "./components/character.component";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((characters) => {
        setCharacters(characters.results);
        console.log(characters.results);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="title"> Rick and Morty Rolodex </h1>

      <div className="chars-list-container">
        {characters.map((character) => (
          <Character character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
