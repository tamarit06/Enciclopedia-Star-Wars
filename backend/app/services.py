import requests
import os
from dotenv import load_dotenv
load_dotenv()
SWAPI_URL = os.getenv("SWAPI_URL")
print(SWAPI_URL)

def get_characters(search: str = ""):

    response = requests.get(SWAPI_URL)
    print(response.json())

    if response.status_code != 200:
        return {"error": "Failed to fetch characters"}

    data = response.json()

    characters = []

    for character in data:

        if search.lower() in character["name"].lower():
            characters.append({
                "name": character["name"],
                "gender": character["gender"],
                "id": int(character["url"].split("/")[-1]),
            })

    return {
        "characters": characters
    }

 

def get_character_by_id(character_id:int):  
    url_with_id = f"{SWAPI_URL}/{character_id}"
    print (url_with_id)

    response = requests.get(url_with_id)
  
    if response.status_code != 200:
        return {"error": "Character not found"}
    data=response.json()
   
    films=get_resource_data(data["films"],["title","release_date"])
    species=get_resource_data(data["species"],["name","classification","language"])
    starships = get_resource_data(data["starships"],["name","model"])
    vehicles=get_resource_data(data["vehicles"],["name","model"])
    character={    
        "name": data['name'],
        "height": data['height'], 
        "mass": data['mass'], 
        "hair_color": data['hair_color'], 
        "skin_color": data['skin_color'], 
        "eye_color": data['eye_color'], 
        "birth_year": data['birth_year'],
       
    }
    return character
def get_character_details(character_id:int):
        url_with_id = f"{SWAPI_URL}/{character_id}"
    
        response = requests.get(url_with_id)
      
        if response.status_code != 200:
            return {"error": "Character not found"}
        data=response.json()
       
        films=get_resource_data(data["films"],["title","release_date"])
        species=get_resource_data(data["species"],["name","classification","language"])
        starships = get_resource_data(data["starships"],["name","model"])
        vehicles=get_resource_data(data["vehicles"],["name","model"])
        character={    
            
            "films": films,
            "species": species,
            "starships": starships,
            "vehicles": vehicles
        }
        return character

def get_resource_data(urls,campos):
    result=[]
    for iten in urls:
        response = requests.get(iten)
        if response.status_code == 200:
            item_data = response.json()
            result.append(
                {campo: item_data[campo] for campo in campos}
            )
    return result
get_character_by_id(2)
    