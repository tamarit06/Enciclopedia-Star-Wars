import type { Character } from "../interfaces/character";

const API_URL = "http://127.0.0.1:8000";

export async function getCharacters(search: string = ""): Promise<Character[]> {
 const response = await fetch(
  `${API_URL}/characters?search=${encodeURIComponent(search)}`
);
  if (!response.ok) {
    throw new Error("Error al obtener los personajes");
  }

  const data = await response.json();

  return data.characters;
}

export async function getCharacterById(
  id: number
): Promise<Character> {

  const response = await fetch(
    `http://127.0.0.1:8000/characters/${id}`
  );

  if (!response.ok) {
    throw new Error("Personaje no encontrado");
  }

  return response.json();
}
export async function getCharacterDetails(id: number) {
  const response = await fetch(
    `${API_URL}/characters/${id}/details`
  );

  if (!response.ok) {
    throw new Error("No se pudieron cargar los detalles");
  }

  return response.json();
}