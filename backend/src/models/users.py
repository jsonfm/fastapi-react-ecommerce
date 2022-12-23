from models import CommonModel
from pydantic import EmailStr


class User(CommonModel):
    email: EmailStr