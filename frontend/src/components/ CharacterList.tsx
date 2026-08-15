import CharacterCard from "./CharacterCard";
import type { Character } from "../interfaces/character";
import "./CharacterList.css"
type Props={
    characters:Character[];
}
function CharacterList({characters}:Props) {
    return(
        <div className="list">
        {characters.map((character) => (
        <CharacterCard
          key={character.name}
          character={character}
        />
      ))}
        </div>
    )
}
export default CharacterList;