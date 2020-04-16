/**
 * クッキーの値を取得する
 * @param {String} searchKey 検索するキー
 * @returns {String} キーに対応する値
 */
// 会員登録やログインの機能を実装する前に、CSRF 対策を実装します。サーバサイドの API には GET 以外のメソッドでの通信時に CSRF トークンのチェックが入りますので、ストアを用いた API 呼び出し箇所を実装する前に用意しておく必要があります。

export function getCookieValue (searchKey) {
  if (typeof searchKey === 'undefined') {
    return ''
  }

  let val = ''

  document.cookie.split(';').forEach(cookie => {
    const [key, value] = cookie.split('=')
    if (key === searchKey) {
      return val = value
    }
  })

  return val
}
export const OK = 200
export const CREATED = 201
export const INTERNAL_SERVER_ERROR = 500