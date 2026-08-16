import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById, getCharacterDetails } from "../services/characterService";
import type { Character,CharacterDetails } from "../interfaces/character";
import "./CharacterDetails.css";



function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [details, setDetails] = useState<CharacterDetails|null>(null);

  useEffect(() => {
  async function loadCharacter() {
    if (!id) return;

    // Primero cargamos la información básica
    const data = await getCharacterById(Number(id));

    setCharacter(data);

    // Después cargamos la información adicional
    const extraData = await getCharacterDetails(Number(id));

    setDetails(extraData);
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

{details &&(
   <section className="character-section">
        <h2>Films</h2>

        <div className="resource-list">
          {details.films.map((film) => (
            <div className="resource-card" key={film.title}>
              <h3>{film.title}</h3>
              <p>Release date: {film.release_date}</p>
            </div>
          ))}
        </div>
      </section>
  )}
     
{details &&(
 
         <section className="character-section">
        <h2>Vehicles</h2>

        <div className="resource-list">
          {details.vehicles.map((vehicle) => (
            <div className="resource-card" key={vehicle.name}>
              <h3>{vehicle.name}</h3>
              <p>Model: {vehicle.model}</p>
            </div>
          ))}
        </div>
      </section>
)
  
}
{details &&(
     <section className="character-section">
        <h2>Vehicles</h2>

        <div className="resource-list">
          {details.vehicles.map((vehicle) => (
            <div className="resource-card" key={vehicle.name}>
              <h3>{vehicle.name}</h3>
              <p>Model: {vehicle.model}</p>
            </div>
          ))}
        </div>
      </section>
  
)} 
     

   

     

    </div>
  );
}

export default CharacterDetail;