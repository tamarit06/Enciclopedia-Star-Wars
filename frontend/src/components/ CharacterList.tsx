import CharacterCard from "./CharacterCard";
import type { Character } from "../interfaces/character";
import "./CharacterList.css"
type Props={
    characters:Character[];
    onCharacterClick:(id:number)=>void;
}
function CharacterList({characters, onCharacterClick}:Props) {
    return(
        <div className="list">
        {characters.map((character) => (
        <CharacterCard 
        onClick={onCharacterClick}
          key={character.name}
          character={character}
        />
      ))}
        </div>
    )
}
export default CharacterList;