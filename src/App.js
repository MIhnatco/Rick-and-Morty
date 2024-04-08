import { useState, useEffect } from "react";
import "./App.scss";

import logo from "./images/logo@2x.png";
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
      <img src={logo} alt="Rick and Morty" className="logo" />

      <div className="container">
        <div className="column search-box">
          <SearchBox
            className="search-box"
            placeholder="Search character"
            onChangeHandler={onSearchInput}
          />

          <p className="description">
            Rick and Morty is an American adult animated science fiction sitcom
            created by Justin Roiland and Dan Harmon for Cartoon Network's
            nighttime programming block Adult Swim.{" "}
          </p>
          <p className="description">
            The series follows the misadventures of Rick Sanchez, a cynical mad
            scientist, and his good-hearted but fretful grandson Morty Smith,
            who split their time between domestic life and interdimensional
            adventures that take place across an infinite number of realities,
            often traveling to other planets and dimensions through portals and
            on Rick's flying saucer.
          </p>
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
