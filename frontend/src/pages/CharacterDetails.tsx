import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../services/characterService";
import type { Character } from "../interfaces/character";
import "./CharacterDetails.css";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    async function loadCharacter() {
      if (!id) return;

      const data = await getCharacterById(Number(id));
      setCharacter(data);
    }

    loadCharacter();
  }, [id]);

  if (!character) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="character-detail">

      <h1 className="character-name">
        {character.name}
      </h1>

      <section className="character-info">
        <h2>Information</h2>

        <p>Gender: {character.gender}</p>
        <p>Height: {character.height}</p>
        <p>Mass: {character.mass}</p>
        <p>Hair: {character.hair_color}</p>
        <p>Skin: {character.skin_color}</p>
        <p>Eyes: {character.eye_color}</p>
        <p>Birth year: {character.birth_year}</p>
      </section>

      <section className="character-section">
        <h2>Films</h2>

        <div className="resource-list">
          {character.films.map((film) => (
            <div className="resource-card" key={film.title}>
              <h3>{film.title}</h3>
              <p>Release date: {film.release_date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="character-section">
        <h2>Species</h2>

        <div className="resource-list">
          {character.species.map((specie) => (
            <div className="resource-card" key={specie.name}>
              <h3>{specie.name}</h3>
              <p>Language: {specie.language}</p>
              <p>Classification: {specie.classification}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="character-section">
        <h2>Vehicles</h2>

        <div className="resource-list">
          {character.vehicles.map((vehicle) => (
            <div className="resource-card" key={vehicle.name}>
              <h3>{vehicle.name}</h3>
              <p>Model: {vehicle.model}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="character-section">
        <h2>Starships</h2>

        <div className="resource-list">
          {character.starships.map((starship) => (
            <div className="resource-card" key={starship.name}>
              <h3>{starship.name}</h3>
              <p>Model: {starship.model}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default CharacterDetail;