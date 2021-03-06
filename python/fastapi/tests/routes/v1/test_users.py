from fastapi.testclient import TestClient


def test_get_users(client: TestClient) -> None:
    response = client.get("/v1/users")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
