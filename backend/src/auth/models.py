from typing import Union
from pydantic import BaseModel, EmailStr, Field


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: Union[str, None] = EmailStr


class UserLoginSchema(BaseModel):
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "email": "email@example.com",
                "password": "somepassword"
            }
        }

class UserSignupSchema(BaseModel):
    email: EmailStr = Field(...)
    password: str = Field(...)
    password_confirmation: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "email": "email@example.com",
                "password": "somepassword",
                "password_confirmation": "somepassword"
            }
        }
