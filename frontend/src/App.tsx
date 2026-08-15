import { useEffect, useState } from "react";
import CharacterList from "./components/ CharacterList";
import { getCharacterById, getCharacters } from "./services/characterService";
import type { Character } from "./interfaces/character";
import SearchBar from "./components/SearchBar";
import "./App.css"

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search,setSearch]=useState<string>("");
  const[searchType,setSearchType]=useState<"name"|"id">("name");

useEffect(() => {
  

  async function loadCharacters() {
    try {
     

      if (searchType === "name") {
        const data = await getCharacters(search);

        setCharacters(data);
      }

      if (searchType === "id") {
      
        const character = await getCharacterById(Number(search));

      
        setCharacters([character]);
      }

    } catch (error) {
  
      setError("No se pudieron cargar los personajes");
    } finally {
      setLoading(false);
    }
  }

  loadCharacters();
}, [search, searchType]);

  if (loading) {
    return <p>Cargando personajes...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  
const onSearch = (
  query: string,
  type: "name" | "id"
) => {
  setSearch(query);
  setSearchType(type);
};

  return (
    <div className="app">
      <h1>Star Wars Encyclopedia</h1>
    <SearchBar onSearch={onSearch}/>
    <CharacterList characters={characters}></CharacterList>
    </div>
  );
}

export default App;