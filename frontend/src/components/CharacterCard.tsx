import type { Character } from "../interfaces/character";
import"./CharacterCard.css"
type Props = {
  character: Character;
  onClick:(id:number)=>void;
};
function CharacterCard({ character,onClick }: Props) {
    return(
        
        <div className="card"
        onClick={()=>onClick(character.id)}>
            <h2>{character.name}</h2>
            <p>{character.gender}</p>
           
        </div>
    )

}
export default CharacterCard;