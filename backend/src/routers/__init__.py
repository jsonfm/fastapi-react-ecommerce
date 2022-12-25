from .products import router as product_router
from .users import router as user_router
from fastapi import APIRouter


api_router = APIRouter(prefix="/api/v1")
api_router.include_router(product_router)
api_router.include_router(user_router)