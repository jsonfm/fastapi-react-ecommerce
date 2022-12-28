from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
from auth.models import UserLoginSchema, UserSignupSchema
from models.users import User
from datetime import datetime
from database import db
from auth.utils import hash_password, verify_password, create_access_token


router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/login", tags=["Auth"])
async def login(user: UserLoginSchema = Body(...)):
    registered = await db["users"].find_one({"email": user.email })

    if registered is None:
        return {"error": "users does not exists."}

    user = user.dict()
    if verify_password(user.get("password"), registered.get("password")):
        token = create_access_token(user["email"])
        return {"access_token": token}
    else:
        return {"error", "password is incorrect."}



@router.post("/signup", tags=["Auth"])
async def signup(user: UserSignupSchema = Body(...)):
    already_exists = await db["users"].find_one({"email": user.email })

    if already_exists:
        return { "error": "User already exists" }

    if user.password != user.password_confirmation:
        return { "error": "Passwords are different" }
    
    hashed = hash_password(user.password)
    new_user = {
        "email": user.email,
        "password": hashed,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
    created = await db["users"].insert_one(new_user)
    return jsonable_encoder(created)