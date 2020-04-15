<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <p class="list-counter">total: {{ totalCardInList }}</p>
      <!-- リスト内のカードのtotal数のカウント -->
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <draggable group="cards">
    <!-- group属性を使うことで他のコンポーネントへドラッグ&ドロップさせる、または他のコンポーネントからのドラッグ&ドロップを受け付けることができます。互いのコンポーネントを同じnameにすることで実装できます。 -->
      <card v-for="(item, index) in cards"
        :body="item.body"
        :key="item.id"
        :cardIndex="index"
        :listIndex="listIndex"
      />
      <!-- Cardコンポーネントに必要なデータを渡し -->
      <!-- 受け渡すカードの配列データcardsをv-forディレクティブを使って展開 -->
      <card-add :listIndex="listIndex" />
    </draggable>
  </div>
</template>

<script>
import CardAdd from './CardAdd'
import Card from './Card'
import draggable from 'vuedraggable'

export default {
  components: {
    CardAdd,
    Card,
    draggable
  },
  props: {
  // propsには、親コンポーネントから受け取るデータを定義,受け取ったデータはdataプロパティと同じようにアクセス可能
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array,
      required: true
    },
    // cardsはlistsデータを展開した中で受け取ることができるので、Board.vueで追記が必須。
    // propsでデータを受け取る時は、型などの条件を指定可能
    listIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    totalCardInList() {
      return this.cards.length
    }
    // totalCardInListをcomputedプロパティで定義
    // propsで受け取っているcardsのデータを利用してその総数を返せるように
  },

  methods: {
    removeList: function() {
      if(confirm('本当にこのリストを削除しますか？')){
        this.$store.dispatch('removelist', { listIndex: this.listIndex })
      }
    },
    // テンプレートでクリック時にハンドルされるように定義したremovelistメソッドをmethodsプロパティに定義
  }
}
// ★ここまで追記
</script>