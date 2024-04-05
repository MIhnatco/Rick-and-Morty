import { useState, useEffect } from "react";
import "./App.scss";

import Character from "./components/character.component";
import SearchBox from "./components/SearchBox.component";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  //Initial API download
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((characters) => {
        setCharacters(characters.results);
      });
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  useEffect(() => {
    const newFilteredCharacters = characters.filter((character) => {
      return character.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCharacters(newFilteredCharacters);
  }, [characters, searchField]);

  console.log(filteredCharacters);

  return (
    <div className="App">
      <h1 className="title"> Rick and Morty Rolodex </h1>

      <div className="container">
        <div className="column">
          <SearchBox
            className="search-box"
            placeholder="Search character"
            onChangeHandler={onSearchChange}
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
