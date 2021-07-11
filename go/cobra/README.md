# Go

A [direnv](https://github.com/direnv/direnv)-like CLI using [cobra](https://github.com/spf13/cobra).

## Run

```sh
go run main.go --help
```

## Build

```sh
go build -o bin/direnv main.go
./bin/direnv --help
```

## Commands

* Initialize project: `go mod init <package>`
* Deps
  * Install: `go mod download` (unneeded)
  * Add: `go get <dep>`
  * Update: `go get -u [<dep>]`
  * Prune: `go mod tidy`
* Run
  * Build: `go build`
  * Build + run: `go run <file>`
* Format: `go fmt`
* Test: `go test`
