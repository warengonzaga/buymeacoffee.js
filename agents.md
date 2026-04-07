# Clean Commit Workflow

When generating commit messages for this repository, follow the **Clean Commit** workflow.

Reference: https://github.com/wgtechlabs/clean-commit

## Format

```text
<emoji> <type>: <description>
<emoji> <type> (<scope>): <description>
<emoji> <type>!: <description>
<emoji> <type>! (<scope>): <description>
```

## The 9 Types

| Emoji | Type | What it covers |
|:-----:|------|----------------|
| 📦 | `new` | Adding new features, files, or capabilities |
| 🔧 | `update` | Changing existing code, refactoring, improvements |
| 🗑️ | `remove` | Removing code, files, features, or dependencies |
| 🔒 | `security` | Security fixes, patches, vulnerability resolutions |
| ⚙️ | `setup` | Project configs, CI/CD, tooling, build systems |
| ☕ | `chore` | Maintenance tasks, dependency updates, housekeeping |
| 🧪 | `test` | Adding, updating, or fixing tests |
| 📖 | `docs` | Documentation changes and updates |
| 🚀 | `release` | Version releases and release preparation |

## Rules

- Use lowercase for type
- Use `!` immediately after type (no space) to signal a breaking change — only for `new`, `update`, `remove`, `security`
- Use present tense ("add" not "added")
- No period at the end
- Keep the description under 72 characters

## Examples

- `⚙️ setup: add GitHub Copilot commit instructions`
- `📦 new: add buy me a coffee supporter endpoint`
- `🔧 update (api): improve error handling`
- `☕ chore (deps): update axios version`
- `🧪 test: add api client coverage`
- `📖 docs: update contributing guide`
