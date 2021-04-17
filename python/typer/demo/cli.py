from pathlib import Path
from typing import Optional

import typer

from . import __version__
from .utils import load_commands

app = typer.Typer(add_completion=False, context_settings={"help_option_names": ["-h", "--help"]})
load_commands(app=app, path=Path(__file__).parent / "commands")


def version_callback(value: bool) -> None:
    if value:
        typer.echo(__version__)
        raise typer.Exit()


@app.callback
def main(
    version: Optional[bool] = typer.Option(
        None, "--version", callback=version_callback, is_eager=True
    ),
) -> None:
    print("hi")
