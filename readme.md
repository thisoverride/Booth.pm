## **はじめに**
<p>English version <a href="readme-en.md">Here</a></p>
<img src="banner.jpg">
Booth SDKは、人気のあるeコマースプラットフォーム <a href="https://booth.pm">Booth.pm</a> からさまざまな商品情報を抽出するためのウェブスクレイピングツールです。サイト上のすべての無料および有料商品の詳細情報を取得することが可能で、無料の商品のダウンロードも可能です。

## **貢献**

Booth SDKの機能や使いやすさを改善するための貢献を大歓迎します。バグを見つけた場合、機能の要望がある場合、またはコードに貢献したい場合は、私たちの貢献ガイドラインに従ってください。

## **使用例**

Booth SDKの使用例を以下に示します。

```jsx
import BoothSDK from './lib/BoothSDK';

void (async () => {
  const boothSDK = new BoothSDK({ lang: 'en', adultContent: true });
  boothSDK.authenticator.connect(); //資格情報なしで接続

  const response = await boothSDK.product.getItem(3787377); //ダウンロードする商品のID
  await boothSDK.product.download({ path: './downloads', boothProductItem: response }); // ./downloadsに保存
})();

```
# API リファレンス

## 商品

- `listItems(pageIndex?: number)`: アイテムのリストを取得します。`pageIndex`はオプションで、デフォルトは0です。
- `getItem(productID: number)`: 商品IDによる特定のアイテムの詳細を取得します。
- `searchProducts(term: string)`: 提供された検索語で商品を検索します。
- `download(boothProduct: Downloadable)`: 指定した商品をダウンロードします。認証が必要です。

## Authenticator

- `login(email: string, password: string): Promise<void>`: 提供されたメールとパスワードでログインします。
- `connect(): void`: 限定的なアクセスのために認証なしで接続します。

## **ライセンス**

このプロジェクトはMITライセンスの下でライセンスされています - 詳細はLICENSEファイルをご覧ください。
