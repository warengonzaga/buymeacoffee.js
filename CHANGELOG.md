# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]


## [2.0.1] - 2026-04-08

### Changed

- rename agents.md to AGENTS.md
- rename code_of_conduct.md to CODE_OF_CONDUCT.md
- rename contributing.md to CONTRIBUTING.md
- rename claude.md to CLAUDE.md
- Bump actions/upload-pages-artifact from 3 to 4 (#73)
- Bump wgtechlabs/release-build-flow-action from 1.6.0 to 1.7.0 (#74)
- Bump actions/setup-node from 4 to 6 (#75)
- Bump actions/checkout from 4 to 6 (#76)
- Bump actions/deploy-pages from 4 to 5 (#77)

### Security

- update security policy and reporting guidelines
- add security policy and reporting guidelines

## [2.0.0] - 2026-04-08

### Added

- add HttpMethod type and refactor error exports

### Changed

- simplify package workflow and remove unused steps
- address PR #72 review comments
- fix CI lint errors and tsconfig deprecation
- simplify pages deployment workflow
- enable strict mode and add types tsconfig
- update dependencies and add bun lockfile
- add editorconfig for consistent code style
- add TypeScript typings, pagination, by-id lookups, and BMCError class
- update package configuration
- add CI, packaging, release, and Pages workflows (#70)
- migrate project workflow to bun (#71)
- add clean commit guidance files (#69)
- bump brace-expansion in the npm_and_yarn group across 1 directory (#67)
- add dependabot config (#68)
- bump the npm_and_yarn group across 1 directory with 11 updates (#66)
- bump the npm_and_yarn group across 1 directory with 20 updates (#65)
- update funding info
- update funding info
- add buymeacoffee in funding file

### Removed

- exclude dist artifacts from version control

