# Mypyc

[Mypyc](https://mypyc.readthedocs.io/) allows you to generate C code from typed Python code!

## Install

```shell
poetry install
```

## Compile

```shell
xcode-select --install # ensure you have a C-compiler
poetry run mypyc fib.py
```

## Benchmark

With `Python`:

```shell
$ hyperfine 'python3 -IS fib.py'
Benchmark #1: python3 -IS fib.py
  Time (mean ± σ):     787.7 ms ±  16.6 ms    [User: 771.5 ms, System: 7.4 ms]
  Range (min … max):   765.1 ms … 815.4 ms    10 runs
```

With `C`:

```shell
$ hyperfine 'python3 -ISc "import fib"'
Benchmark #1: python3 -Sc "import fib"
  Time (mean ± σ):      76.2 ms ±   3.1 ms    [User: 65.1 ms, System: 6.3 ms]
  Range (min … max):    72.3 ms …  84.6 ms    37 runs
```
