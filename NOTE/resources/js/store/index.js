import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')
// ストアの状態はリロードされると初期化されるので、リロードしても、初期化されないようにストアのstateへ保存時に、localStorageにも同じ状態を保存できるように実装する。
// localStorageに保存したリストを取得。localStorageは保存するデータを「キーと値」のセットで扱う。getItem('ここ！')に設定したキーで保存したデータを取得。

const store = new Vuex.Store({
// 上記のコードでストアインスタンスを取得し、main.jsでインポートできるように後述export default
  state: {
    lists: savedLists ? JSON.parse(savedLists): [
      // mutationsでリストのデータの状態を更新できるように、stateにリストを定義
      // localStorageにはJSON形式の文字列型でデータが保存されているので、取得するときにはJSON.parse(取得するデータ)でオブジェクトに変換する必要
      {
        title: 'Backlog',
        cards: [
          { body: 'English' },
          { body: 'Mathematics' },
        ]
      },
      {
        title: 'Todo',
        cards: [
          { body: 'Science' }
        ]
      },
      {
        title: 'Doing',
        cards: []
      }
      // リスト内でカードを複数持てるように、配列型でcardsを定義
    ],
    // localStorageに保存されたリストがあれば取得、なければデフォルトのリスト配列を設置。
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    // ListAdd.vueで呼び出すよう定義したactionsを使って、mutationsをコミット
    // actionsは第一引数にcontextというストアインスタンスのメソッドやプロパティを呼び出せるオブジェクトを受け取ることができる。第二引数には、mutationsに渡す引数を指定。
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    // リスト削除のミューテーション呼び出し
    addCardToList(context, payload) {
      context.commit('addCardToList', payload)
    },
    // カード追加のミューテーション呼び出し
    removeCardFromList(context, payload) {
      context.commit('removeCardFromList', payload)
    },
    // カード削除のミューテーション呼び出し
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards:[] })
    },
    // addListメソッドはstateのデータへリストの追加を行う。
    // mutationsは第一引数でstate、第二引数ではコミット時に受け取る引数payloadを指定できます。payloadはオブジェクト型で受け取ると、複数のプロパティを受け取ることができるため、推奨されています。
    // mutationsのメソッド内で非同期通信も一緒に行った場合、デバッグでデータの状態がいつ変更されたか追うことができない。非同期通信はactionsで。かつmutationsはあくまでもストアの状態の変更だけを行うことにする。
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    // removelistでは受け取ったリストのインデックスを使ってspliceでリストを削除
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body })
    },
    removeCardFromList(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
  },
  getters: {
    totalCardCount(state) {
      let count = 0
      state.lists.map(content => count += content.cards.length)
      return count
    },
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})
// データの状態を更新後にlocalStorageへデータの状態を保存
// 保存するときはlocalStorage.setItem('設定するキー', 文字列型のデータ)のように任意のキーを設定して、データを文字列型に変換して保存
// subscribeはストアのインスタンスメソッドで、全てのmutationの後に呼ばれます。
// 第一引数にmutationインスタンス、第二引数にmutation後のデータの状態を受け取ります。これでリロードしてもストアのデータの状態は維持される。

export default store