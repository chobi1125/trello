<template>
  <div>
    <p class="info-line">All: {{ totalCardCount }} tasks</p>
    <!-- 全てのカード数のカウント -->
    <div class="list-index">
      <list v-for="(item, index) in lists"
            :key="item.id"
            :title="item.title"
            :cards="item.cards"
            :listIndex="index"
      />
      <!-- Listコンポーネントを呼び出し、Listコンポーネントに必要なデータを渡す -->
      <!-- Listコンポーネント作成時にpropsで受け取れるように定義したデータと紐づく -->
      <!-- v-forはlistsから展開された、現在の値itemとそのインデックスindexを受け取ることが可能 -->
      <!-- itemからさらにlistsで定義されたオブジェクトのキーで値にアクセス可能 -->
      <!-- v-bindでバインドさせたコンポーネントにデータを受け渡すことが可能 -->
      <list-add />
    </div>
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'
import List from './List'
import { mapState } from 'vuex'

export default {
  components: {
    ListAdd,
    List
  },
  computed: {
    ...mapState([
      'lists'
    ]),
    // stateにthis.$store.stateでアクセスすることもできるが、冗長になるのでmapStateを用いる
    // オブジェクトスプレッド演算子（...の部分です）を使っているのは、computedのローカルのオブジェクトと一緒に定義できるようにするため
    // mapStateはこのオブジェクトスプレッド演算子を使わないと、オブジェクトを持ったオブジェクト（ネストされた状態）を返してしまい、computedはmapStateに定義された値を参照できない
    // computedにストアのstateからのデータと、ローカルでの算出データを両方定義する場合には、このように書く必要がある
    totalCardCount() {
      return this.$store.getters.totalCardCount
    }
    // 全体のカードの総数はストアのstateで管理しているcardsの数を合計して返してあげる
    // stateのデータから算出したものをコンポーネントで取得したいときにgettersを使います
  },
}
</script>