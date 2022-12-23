from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from config import config

origins = config.get("CORS", "").split(",")
print("cors: ", origins)

def apply_cors_middleware(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    return app