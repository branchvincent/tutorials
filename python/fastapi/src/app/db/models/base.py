import ormar

from ..driver import db, metadata


class BaseMeta(ormar.ModelMeta):
    database = db
    metadata = metadata


class BaseModel(ormar.Model):
    pass
