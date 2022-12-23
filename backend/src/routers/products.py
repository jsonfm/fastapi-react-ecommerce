from typing import List
from fastapi import APIRouter, Body, HTTPException
from fastapi.encoders import jsonable_encoder

from database import db
from models.products import Product
from datetime import datetime


router = APIRouter(
    prefix="/products", 
    tags=["Products"]
)


@router.get("/", response_model=List[Product])
async def get_products():
    products = await db["products"].find().to_list(100)
    return products


@router.get("/{id}")
async def get_product(id: str):
    if (product := await db["products"].find_one({"_id": id})) is not None:
        return product
    raise HTTPException(status_code=404, detail=f"Product {id} not found")


@router.post('/', response_model=Product)
async def create_product(product: Product = Body(...)):
    product = jsonable_encoder(product)
    result = await db["products"].insert_one(product)
    created = await db["products"].find_one({"_id": result.inserted_id})
    return created


@router.delete('/{id}')
async def delete_product(id):
    return f"Deleting product - {id}"


@router.put('{id}')
async def update_product(id: str):
    return f"Updating Product - {id}"