<!-- 「フォームボタンが押下されたら、リストを作成する」仕組み -->
<template>
  <form class="addlist" @submit.prevent="addList">
  <!-- サブミットイベント時にaddListメソッドをハンドル。.preventはVueのイベント修飾詞で、サブミット時にリロードされるのを防ぐ。 -->
    <input v-model="title"
           type="text"
           class="text-input"
           placeholder="Add new list"
    >
    <!-- v-modelにtitleを定義することで、dataプロパティとバインド。データバインディングは、scriptで定義したdataプロパティをテンプレートでもリアルタイムにそのまま共有（紐付け）できる仕組み -->
    <button type="submit" class="add-button">
      Add
    </button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      title: '',
    }
  },
  methods: {
    addList: function() {
      this.$store.dispatch('addlist', { title: this.title })
      this.title = ''
    },
    // this.$store.dispatch('アクション名')でactionsを実行
    // 第二引数にオブジェクト型でdataプロパティのtitleを渡す。
  }
}
</script>