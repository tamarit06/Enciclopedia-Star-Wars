export interface Character {
    id:number;
    name: string;
    height: string;
    mass: string;
    gender:string,
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;

}
export interface CharacterDetails {
  films: Film[];
  species: Species[];
  vehicles: Vehicle[];
  starships: Starship[];
}
export interface Film {
  title: string;
  release_date: string;
}
export interface Species {
  name: string;
  classification: string;
  language: string;
}

export interface Starship {
  name: string;
  model: string;
}

export interface Vehicle {
  name: string;
  model: string;
}

