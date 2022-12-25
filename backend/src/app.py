from fastapi import FastAPI
from routers.users import router as users_routers
from routers.products import router as products_routers
from middlewares.cors import apply_cors_middleware
from routers import api_router
from auth.router import router as auth_router

def create_app() -> FastAPI:
    app = FastAPI()

    # Middlewares
    app = apply_cors_middleware(app)
    
    # Configuring routers
    app.include_router(api_router)
    app.include_router(auth_router)
    return app