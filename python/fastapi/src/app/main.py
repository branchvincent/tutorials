from loguru import logger

from fastapi import FastAPI
from fastapi.responses import RedirectResponse

from .db.driver import db
from .routes import api_router

app = FastAPI()
app.state.db = db
app.include_router(api_router)


@app.on_event("startup")
async def startup() -> None:
    await db.connect()
    await db.init()
    logger.info(f"Connected to {db.url}")


@app.on_event("shutdown")
async def shutdown() -> None:
    await db.disconnect()


@app.get("/")
async def docs_redirect() -> RedirectResponse:
    return RedirectResponse(url="/docs")
