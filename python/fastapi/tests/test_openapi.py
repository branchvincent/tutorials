import schemathesis

from app.main import app

schemathesis.fixups.install()

# FIXME: Spec fails schema validation
# schema = schemathesis.from_dict(app.openapi())


# @schema.parametrize()
# def test_api(case: schemathesis.Case) -> None:
#     case.call_and_validate()
