import ormar

from .base import BaseMeta, BaseModel


class User(BaseModel):
    id: int = ormar.Integer(primary_key=True)
    name: str = ormar.String(max_length=100)

    class Meta(BaseMeta):
        tablename = "users"
