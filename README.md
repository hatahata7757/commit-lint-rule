# commitlint-rule
My own commitlint-rule.

## Rules
`issue-number-check-rule` - This rule checks if the commit message matches the specified pattern.

`{type}: #{issue number} {subject}`

```bash
// The commit message should be in the following format: "{prefix}: #{ticket number} {subject}"
// ❌ Bad commit messages
git commit -m "add: My commit message body"
git commit -m "add: #2My commit message body"
// ✅ Good commit messages
git commit -m "add: #1 My commit message body"
git commit -m "update: #25 My commit message body"
```
