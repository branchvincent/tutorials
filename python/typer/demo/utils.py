from importlib import import_module
from pathlib import Path

from typer import Typer


def load_commands(app: Typer, path: Path) -> None:
    for f in path.glob("*.py"):
        name = f.stem
        module = import_module(f"demo.commands.{name}")
        app.add_typer(getattr(module, "app"), name=name, help=module.__doc__)
