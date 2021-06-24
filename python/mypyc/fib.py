from time import time


def fib(n: int) -> int:
    if n <= 1:
        return n
    return fib(n - 2) + fib(n - 1)


t0 = time()
fib(32)
print(time() - t0)
