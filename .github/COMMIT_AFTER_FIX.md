# Commit after each fix

After each fix, use Conventional Commits so [release-please](https://github.com/googleapis/release-please) can automate changelog and versions.

**One-liner (replace message and files as needed):**
```bash
git add <files> && git commit -m "fix: <short description>" && git push
```

**Types:** `feat:`, `fix:`, `docs:`, `ci:`, `chore:`, `refactor:`, `test:`

**Example for golangci-lint config fix:**
```bash
git add .golangci.yml && git commit -m "fix(ci): remove gofmt/goimports from linters for golangci-lint v2" && git push
```
