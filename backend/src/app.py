from fastapi import FastAPI
from routers.users import router as users_routers
from routers.products import router as products_routers
from middlewares.cors import apply_cors_middleware


def create_app() -> FastAPI:
    app = FastAPI()

    # Middlewares
    app = apply_cors_middleware(app)
    
    # Configuring routers
    app.include_router(users_routers)
    app.include_router(products_routers)
    return app