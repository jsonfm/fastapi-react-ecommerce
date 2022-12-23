from typing import List
from fastapi import APIRouter, Body, HTTPException, status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import Response

from database import db
from models.products import Product, UpdateProduct
from datetime import datetime
from bson import ObjectId


router = APIRouter(
    prefix="/products", 
    tags=["Products"]
)


@router.get("/", response_model=List[Product])
async def get_products():
    products = await db["products"].find().to_list(100)
    return products


@router.get("/{id}", response_model=Product)
async def get_product(id: str):
    if (product := await db["products"].find_one({"_id": ObjectId(id)})) is not None:
        return product
    raise HTTPException(status_code=404, detail=f"Product {id} not found")


@router.post('/', response_model=Product, response_description="Update a Product")
async def create_product(product: Product = Body(...)):
    product = jsonable_encoder(product)
    result = await db["products"].insert_one(product)
    created = await db["products"].find_one({"_id": result.inserted_id})
    return created


@router.put('/{id}')
async def update_product(id: str, product: Product = Body(...)):
    product = {k: v for k, v in product.dict().items() if v is not None}
    if len(product) > 1:
        update_result = await db["products"].update_one({"_id": ObjectId(id)}, {"$set": product})
        if update_result.modified.count() > 0:
            if (updated_product := await db["products"].find_one({"_id": ObjectId(id)})) is not None:
                return updated_product

    if (existing_product := await db["students"].find_one({"_id": id})) is not None:
        return existing_product

    raise HTTPException(status_code=404, detail=f"Product {id} not found")


@router.delete('{id}')
async def delete_product(id: str):
    delete_result = await db["products"].delete({"_id", ObjectId(id)})
    if delete_result.delete_count == 1:
        return Response(status_code=status.HTTP_204_NO_CONTENT)
    raise HTTPException(status_code=404, detail=f"Product {id} not found")