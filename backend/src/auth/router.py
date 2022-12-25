from fastapi import APIRouter
from auth import ACCESS_TOKEN_EXPIRE_MINUTES

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/login")
async def login():
    return "login"