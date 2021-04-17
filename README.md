# Tutorials

This is a collection of languages and libraries that I try.

## How to create a monorepo?

For future reference, this was the [best solution](https://gist.github.com/x-yuri/6161d90d1af8ebac6e560bcef548c1c3) I found to merge separate child repo's into a parent monorepo (like this one) while preserving individual file history:

```console
brew install git-filter-repo

# Clone child repo and move into new subdirectory
git clone <repo> tmp/child
git filter-repo --source=tmp/child --target=tmp/child --to-subdirectory-filter <new/subdir>

# Merge child repo into parent
git remote add -f child tmp/child
git merge --allow-unrelated-histories child/main
git remote remove child
```
