module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        // 必須
        'add', // 新規機能追加
        'fix', // （バグ以外の）修正
        'bugfix', // バグ修正
        'refactor', // リファクタリング・フォーマット適用
        'revert', // 変更取り消し
        'update', // 機能修正（バグではない）
        'remove', // 削除（ファイル）
        'disable', // 無効化（コメントアウト等）
      ]
    ]
  }
};
