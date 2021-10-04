from typing import Generator

import pytest

from app.main import app
from fastapi.testclient import TestClient


@pytest.fixture(scope="module")
def client() -> Generator[TestClient, None, None]:
    with TestClient(app) as c:
        yield c
