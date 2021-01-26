module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'ticket-number-check-rule': [2, 'always'],
    'type-enum': [
      2,
      'always',
      [
        'fix', // 開発中のテスト、レビュー指摘の修正
        'bugfix', // リリース後のバグ修正
        'add', // 新規（ファイル）機能追加
        'update', // 機能改修（バグではない）、仕様変更、無効化
        'clean', //整理（リファクタリング等）
        'remove', // 削除（ファイル）
        'revert', // 変更取り消し
        'move' // リソースの移動、名前の変更
      ]
    ]
  },
  plugins: [
    {
      rules: {
        'ticket-number-check-rule': ({ subject }) => {
          const ACCEPT_PATTERN = '\s#[0-9]+\s';
          if (subject != null) {
            return [
              !subject.match(ACCEPT_PATTERN),
              'コミットメッセージは{プレフィックス}: #{チケット番号} {本文}の形式にしてください。',
            ];
          }
        }
      }
    }
  ]

};
