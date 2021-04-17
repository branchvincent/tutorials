"""Configuration"""

import json
from pathlib import Path
from typing import Any, Optional

import typer

app = typer.Typer()


class Config:
    @classmethod
    def path(cls) -> Path:
        return Path(typer.get_app_dir("demo")) / "config.json"

    @classmethod
    def read(cls) -> dict[str, Any]:
        contents = cls.path().read_text()
        return json.loads(contents)

    @classmethod
    def write(cls, contents: dict[str, Any]) -> None:
        contents_json = json.dumps(contents)
        cls.path().write_text(contents_json)


@app.command()
def get(key: Optional[str] = typer.Option(None, help="Setting key")) -> None:
    """Get configuration by key"""
    config = Config.read()
    if key:
        print(config.get(key))
    else:
        print(json.dumps(Config.read(), indent=4, sort_keys=True))


@app.command()
def set(key: str, value: str) -> None:
    """Set a configuration value"""
    config = Config.read()
    config[key] = value
    Config.write(config)


@app.command()
def delete(key: str) -> None:
    """Delete configuration by key"""
    config = Config.read()
    config.pop(key)
    Config.write(config)


@app.command()
def edit() -> None:
    """Edit the configuration"""
    config_path = Config.path()
    typer.launch(str(config_path))
