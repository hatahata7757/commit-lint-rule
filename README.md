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

## Customise/Override rules
```diff
// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
  // to Customise/Override a rule
+  'issue-number-check-rule': [2, 'always'],
+  'type-enum': [
+     2,
+     'always',
+     [
+       'fix',    // 開発中のテスト・レビュー指摘の修正
+       'bugfix', // リリース後のバグ修正
+       'add',    // 新規機能・ファイル追加
+       'update', // 機能改修（バグではない）・仕様変更・無効化
+       'clean',  // 整理（リファクタリング等）
+       'remove', // ファイル削除
+       'revert', // 変更取り消し
+       'move'    // リソースの移動、名前の変更
+     ]
+   ]
  },
}
