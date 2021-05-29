<template>
  <!-- ★ここから追記 -->
  <form class="addcard" @submit.prevent="addCardToList">
  <!-- サブミットイベント時にaddCardToListメソッドをハンドル -->
    <input v-model="body"
           type="text"
           class="text-input"
           placeholder="Add new card"
    />
    <!-- v-modelにbodyを定義することで、dataプロパティとバインド -->
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
  <!-- ★ここまで追記 -->
</template>

<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true,
    }
  },
  // カードを作成し、ストアでデータの状態を管理
  data: function() {
    return {
      body: '',
      // バインドさせるbodyもdataプロパティに定義
    }
  },
  methods: {
    addCardToList: function() {
      this.$store.dispatch('addCardToList', { body: this.body, listIndex: this.listIndex })
      this.body = ''
    }
    // サブミット時にハンドルされるように定義したaddCardToListメソッドをmethodsプロパティに定義、store/index.jsで定義したactionsを呼び出し
    // addCardToListメソッドで必要なlistIndexをListコンポーネントから受け取り

  }

}
</script>