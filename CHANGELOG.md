# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]


## [2.0.3] - 2026-07-04

### Changed

- bump actions/checkout from 6 to 7 (#91)
- bump axios from 1.18.0 to 1.18.1 in the minor-and-patch group (#92)
- validate token and resource IDs
- review PR feedback
- bump wgtechlabs/package-build-flow-action from 2.1.1 to 2.1.2 (#88)
- bump axios from 1.17.0 to 1.18.0 in the minor-and-patch group (#89)

## [2.0.2] - 2026-06-08

### Changed

- align changelog entry format
- normalize changelog capitalization
- fix changelog entries for v2.0.1
- bump axios from 1.16.0 to 1.16.1 in the minor-and-patch group (#85)
- bump axios from 1.15.2 to 1.16.0 in the minor-and-patch group (#82)
- bump axios from 1.15.0 to 1.15.2 in the minor-and-patch group (#81)
- bump axios from 1.14.0 to 1.15.0 in the minor-and-patch group (#79)
- bump actions/upload-pages-artifact from 4 to 5 (#80)

### Security

- upgrade axios from 1.16.1 to 1.17.0 (#87)

## [2.0.1] - 2026-04-08

### Changed

- rename agents.md to AGENTS.md
- rename code_of_conduct.md to CODE_OF_CONDUCT.md
- rename contributing.md to CONTRIBUTING.md
- rename claude.md to CLAUDE.md
- Bump axios from 1.14.0 to 1.16.1 (#86)
- Bump actions/upload-pages-artifact from 4 to 5 (#86)
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
- add buymeacoffee in funding file

### Removed

- exclude dist artifacts from version control
