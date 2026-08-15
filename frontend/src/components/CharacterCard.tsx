import type { Character } from "../interfaces/character";
import"./CharacterCard.css"
type Props = {
  character: Character;
};
function CharacterCard({ character }: Props) {
    return(
        <div className="card">
            <h2>{character.name}</h2>
            <p>{character.gender}</p>
            <p>{character.birth_year}</p>
            <p>{character.eye_color}</p>

        </div>
    )

}
export default CharacterCard;