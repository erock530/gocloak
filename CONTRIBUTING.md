# Contributing

## Releases & Semantic Versioning

Releases are automated with [release-please](https://github.com/googleapis/release-please) and [Conventional Commits](https://www.conventionalcommits.org/).

### Version bumps

- `feat:` → minor (1.0.0 → 1.1.0)
- `fix:` → patch (1.0.0 → 1.0.1)
- `feat!:` or `fix!:` (breaking) → major (1.0.0 → 2.0.0)

### Process

1. Use conventional commits for your changes.
2. Release-please opens a **Release PR** when there are releasable commits.
3. Merging the Release PR creates the tag, GitHub release, and updates `CHANGELOG.md` with the new version and date.

### Initial setup

If adding release-please for the first time and the current state is v1.0.0, create and push the tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Release-please will then propose v1.1.0, v1.0.1, etc. based on new commits.
