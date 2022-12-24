from typing import Optional
from models.common import CommonModel


class Product(CommonModel):
    name: str
    description: str
    price: Optional[float] = 0.00


class UpdateProduct(CommonModel):
    name: Optional[str]
    description: Optional[str]
    price: Optional[float] = 0.00