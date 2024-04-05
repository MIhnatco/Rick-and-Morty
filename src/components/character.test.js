import { render, screen } from "@testing-library/react";
import Character from "./character.component.jsx";

describe("Character component", () => {
  const mockCharacter = {
    name: "Rick Sanchez",
    image: "https://example.com/rick.png",
    species: "Human",
    gender: "Male",
    status: "Alive",
    episode: ["S01E01", "S01E02"],
    location: { name: "Earth" },
  };
});
