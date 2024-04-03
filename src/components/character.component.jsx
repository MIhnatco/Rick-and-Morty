import "./character.styles.scss";

const Character = ({ character }) => {
  const { name, image, species, gender, status, episode } = character;

  return (
    <div className="char-container">
      <img alt={`character ${name}`} src={image} />
      <h2>{name}</h2>

      <div>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
      </div>

      <p>Episodes: {episode.length}</p>
    </div>
  );
};

export default Character;
