import { useState, useEffect } from "react";
import "./App.scss";

import Character from "./components/character.component";
import SearchBox from "./components/SearchBox.component";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchSpecies, setSearchSpecies] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  //Initial API download
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((characters) => {
        setCharacters(characters.results);
      });
  }, []);

  const onSearchName = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchName(searchFieldString);
  };

  useEffect(() => {
    const newFilteredCharacters = characters.filter((character) => {
      return character.name.toLocaleLowerCase().includes(searchName);
    });

    setFilteredCharacters(newFilteredCharacters);
  }, [characters, searchName]);

  const onSearchSpecies = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchSpecies(searchFieldString);
  };

  useEffect(() => {
    const speciesFilteredCharacters = characters.filter((character) => {
      return character.species.toLocaleLowerCase().includes(searchSpecies);
    });

    setFilteredCharacters(speciesFilteredCharacters);
  }, [characters, searchSpecies]);

  return (
    <div className="App">
      <h1 className="title"> Rick and Morty Rolodex </h1>

      <div className="container">
        <div className="column">
          <SearchBox
            className="search-box"
            placeholder="Search character"
            onChangeHandler={onSearchName}
            searchBy="Name"
          />

          <SearchBox
            className="search-box"
            placeholder="Search character"
            onChangeHandler={onSearchSpecies}
            searchBy="Species"
          />
        </div>

        <div className="column chars-list-container">
          {filteredCharacters.map((character) => (
            <Character character={character} key={character.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
