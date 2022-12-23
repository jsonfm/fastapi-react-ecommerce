import motor.motor_asyncio
from config import config


client = motor.motor_asyncio.AsyncIOMotorClient(config.get("MONGO_URI"))
db = client[config["DB_NAME"]]

print("db URL: ", config["MONGO_URI"])