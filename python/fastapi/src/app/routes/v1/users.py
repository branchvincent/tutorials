from fastapi_crudrouter import OrmarCRUDRouter

from app.db.models.user import User

router = OrmarCRUDRouter(schema=User)
