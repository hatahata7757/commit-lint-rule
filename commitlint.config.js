const subjectIssueNumberEmpty = require('./rules/subject-issue-number-empty');

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-issue-number-empty': [2, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'fix',    // 開発中のテスト・レビュー指摘の修正
        'bugfix', // リリース後のバグ修正
        'add',    // 新規機能・ファイル追加
        'update', // 機能改修（バグではない）・仕様変更・無効化
        'clean',  // 整理（リファクタリング等）
        'remove', // ファイル削除
        'revert', // 変更取り消し
        'move'    // リソースの移動、名前の変更
      ]
    ]
  },

  plugins: [
    {
      rules: {
        'subject-issue-number-empty': subjectIssueNumberEmpty
      }
    }
  ]
};
