import "./character.styles.scss";

const Character = ({ character }) => {
  const { name, image, species, gender, status, episode, location } = character;

  return (
    <div className="char-container">
      <img alt={`character ${name}`} src={image} />
      <h2>{name}</h2>

      <div className="personal-infos">
        <p>
          <span>Species:</span> {species}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
      </div>

      <div className="additional-infos">
        <p>
          <strong>Status:</strong> {status}
        </p>
        <p>
          <strong>Episodes:</strong> {episode.length}
        </p>
      </div>
      <p>
        <strong>Location:</strong> {location.name}
      </p>
    </div>
  );
};

export default Character;
