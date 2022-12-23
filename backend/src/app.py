from fastapi import FastAPI
from routers.users import router as users_routers
from routers.products import router as products_routers



def create_app() -> FastAPI:
    app = FastAPI()

    # Configuring routers
    app.include_router(users_routers)
    app.include_router(products_routers)
    return app