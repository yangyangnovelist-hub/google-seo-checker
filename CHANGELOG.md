# Changelog

## 0.1.0 — initial release

- 65 rules across 14 categories, sourced from 152 Google Search docs
- `seo-check <url-or-file>` CLI with `--json` / `--filter` / `--quiet` / `--fail-on` / `--no-sitemap` / `--no-robots`
- `seo-lookup <keywords>` CLI with score-ranked excerpts + section filter
- `seo-fetch-docs` to refresh the bundled docs/ from developers.google.com
- Programmatic API: `check(url)`, `RULES`, `CATEGORIES`, `inspect/*` helpers
- Zero runtime dependencies. Node ≥ 18.
- `SKILL.md` for Claude Code integration.
