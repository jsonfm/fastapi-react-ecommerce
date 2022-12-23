from typing import Optional
from models.common import CommonModel


class Product(CommonModel):
    name: str
    description: str


class UpdateProduct(CommonModel):
    name: Optional[str]
    description: Optional[str]