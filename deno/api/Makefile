.PHONY: help
help: ## Show this help
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z -]+:.*?## / {printf "\033[36m%-10s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST) | sort

.PHONY: lint
lint: ## Lint files
	@deno lint

fmt: ## Format files
	@deno fmt

.PHONY: test
test: ## Run tests
	@deno test

start: ## Start server
	@deno run --watch --allow-net src/server.ts
