# OJの質問箱（β）

https://q.920oj.net/

OJの質問箱（β）は、自分専用の「質問箱」クローンです。

- フロントエンド: Nuxt.js
- バックエンド: Express(Nuxt.jsのserverMiddlewareとして稼働)
- データベース: MongoDB

で構成されています。

## Build Setup

- データベースを作成
- ポート番号を変更
- .envファイルを作成し、管理者用パスワードを設定（プロパティ名: KEY）
- 以下のコマンドを実行

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Contact
Junya Oiwa (@920oj)
http://920oj.net/contact