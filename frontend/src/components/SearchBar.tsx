import React, { useState } from "react";
import "./SearchBar.css"
type Props={
    onSearch: (query: string,type:"name"|"id") => void;
}
function SearchBar({onSearch}: Props) {
    const[query,setQuery]=useState<string>("");
    const [type,setType]=useState<"name"|"id">("name");
    return(
        
        <div className="search-bar">
            <input
                type="text"
                placeholder={type=="name"? "Buscar por nombre":"Buscar por id"}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <select
            value={type}
            onChange={(e)=>setType(e.target.value as "name"|"id")}>

            <option value={"name"}>Nombre</option>
            <option value={"id"}>Id</option>
        </select>

            
            <button onClick={() => onSearch(query,type)}>Buscar</button>
        </div>
    )
}
export default SearchBar;