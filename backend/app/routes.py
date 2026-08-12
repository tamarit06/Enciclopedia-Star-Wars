from fastapi import APIRouter
from app.services import get_characters
from app.services import get_character_by_id


router = APIRouter()


@router.get("/characters")
def list_characters(page: int = 1,search: str = ""):
    return get_characters(page,search)

@router.get("/characters/{character_id}")
def get_character(character_id: int):
    return get_character_by_id(character_id)