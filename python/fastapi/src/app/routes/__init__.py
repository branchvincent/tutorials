from collections import namedtuple
from importlib import import_module
from pathlib import Path
from typing import Any, Iterator

from fastapi import APIRouter

HERE = Path(__file__).parent.resolve()
NamedRouter = namedtuple("NamedRouter", ["route", "router"])


def find_routers(where: Path = HERE) -> Iterator[NamedRouter]:
    for f in where.glob("**/[!_]*.py"):
        file_path = f.relative_to(where)
        route_path = f"/{'/'.join(file_path.parts)}".removesuffix(".py")
        import_path = f"{__package__}.{'.'.join(file_path.parts)}".removesuffix(".py")
        module = import_module(import_path)
        yield NamedRouter(route_path, module.router)  # type: ignore


api_router = APIRouter()
for route, router in find_routers():
    # HACK: workaround `fastapi-crudrouter` adding a prefix
    route = route.removesuffix(router.prefix).rstrip("/")
    api_router.include_router(router, prefix=route)
