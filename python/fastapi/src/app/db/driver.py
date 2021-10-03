from os import getenv

import databases
import sqlalchemy

metadata = sqlalchemy.MetaData()


class Database(databases.Database):
    async def init(self, reset: bool = False) -> None:
        engine = sqlalchemy.create_engine(str(self.url))
        if reset:
            metadata.drop_all(engine)
        metadata.create_all(engine)


db = Database(getenv("DATABASE_URL", "sqlite:///./sqlite.db"))
