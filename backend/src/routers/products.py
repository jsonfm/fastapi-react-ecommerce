from fastapi import APIRouter
from database import db


router = APIRouter(
    prefix="/products", 
    tags=["Products"]
)

print("db: ", db)

@router.get("/")
async def get_products():
    return "All products"


@router.get("/{id}")
def get_product(id: str):
    return f"Product - {id}"


@router.post('/')
async def create_product():
    product = {
        "name": "test product",
        "description": "some product"
    }
    result = await db["products"].insert_one(product)
    return "Creating Product!"


@router.delete('/{id}')
async def delete_product(id):
    return f"Deleting product - {id}"


@router.put('{id}')
async def update_product(id: str):
    return f"Updating Product - {id}"