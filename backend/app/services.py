import requests
url = "https://swapi.dev/api/people/"

def get_characters(page:int,search:str):
    params = {}
    if search:
        params = {"search": search}
    else:
        params = {"page": page}
    response = requests.get(url, params=params)
    if response.status_code != 200:
        return {"error": "Failed to fetch characters"}
    data=response.json()
    characters =[]
    for character in data['results']:
        characters.append({
            "name": character['name'],
             "gender": character["gender"],
             "id": int(character['url'].split("/")[-2])
        })
    info={
        "count": data['count'],
        "next": data['next'],
        "previous": data['previous'],
        "characters": characters
        }
    return info

def get_character_by_id(character_id:int):  
    url_with_id = f"{url}{character_id}/"
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
d=get_character_by_id(2)
print(d)