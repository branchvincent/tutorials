from fastapi_utils.inferring_router import InferringRouter as APIRouter

router = APIRouter()


@router.get("")
async def ping() -> dict[str, str]:
    """Ping the server"""
    return {"message": "pong!"}
