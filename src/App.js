import { useState, useEffect } from "react";
import "./App.scss";

import Character from "./components/character.component";
import SearchBox from "./components/SearchBox.component";

/**
 * Main component for displaying Rick and Morty characters
 */
const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const [error, setError] = useState(null);

  //Fetches characters data from the API upon component mount
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch characters");
        }
        return response.json();
      })
      .then((characters) => {
        setCharacters(characters.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  /**
   * Event handler for updating search input state
   * @param {Object} event - The event object
   */
  const onSearchInput = (event) => {
    setSearchInput(event.target.value.toLocaleLowerCase());
  };

  /**
   * Filters characters based on the provided search query
   * @returns {Array} - An array of filtered characters.
   */
  useEffect(() => {
    const filteredCharacters = characters.filter((character) => {
      const nameMatch = character.name
        .toLocaleLowerCase()
        .includes(searchInput);
      const speciesMatch = character.species
        .toLocaleLowerCase()
        .includes(searchInput);
      const locationMatch = character.location.name
        .toLocaleLowerCase()
        .includes(searchInput);
      return nameMatch || speciesMatch || locationMatch;
    });

    setFilteredCharacters(filteredCharacters);
  }, [characters, searchInput]);

  return (
    <div className="App">
      <h1 className="title"> Rick and Morty Rolodex </h1>

      <div className="container">
        <div className="column search-box">
          <SearchBox
            className="search-box"
            placeholder="Search character"
            onChangeHandler={onSearchInput}
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
