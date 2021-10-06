import schemathesis

from app.main import app

schemathesis.fixups.install()

schema = schemathesis.from_dict(app.openapi(), validate_schema=False)


@schema.parametrize()
def test_api(case: schemathesis.Case) -> None:
    case.call_and_validate()
