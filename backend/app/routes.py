from fastapi import APIRouter
from app.services import get_characters
from app.services import get_character_by_id
from app.services import get_character_details


router = APIRouter()


@router.get("/characters")
def list_characters(search:str=""):
    return get_characters(search)

@router.get("/characters/{character_id}/details")
def get_character_details_route(character_id: int):
    return get_character_details(character_id)

@router.get("/characters/{character_id}")
def get_character(character_id: int):
    return get_character_by_id(character_id)