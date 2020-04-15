<template>
  <div>
    <header>
      <h1>My Note</h1>
      <RouterView />
    </header>
    <main>
      <Board />
    </main>
    <footer>
      <!-- ここから追加 -->
      <div v-for="(list, index) in listing" :key="index">
        <!-- v-for="(info, index) in listing"はlisting配列について繰り返し処理 -->
        <h1>{{list.created_at}}</h1>
        <h1>{{list.title}}</h1>
      </div>
      <!-- ここまで追加 -->
    </footer>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  data() {
    return {
      listing :[] // 追加
    };
  },
  components: {
    Board
  },
  // 以下mountedプロパティ追加
  mounted() { 
  // mounted() はVueのインスタンスライフサイクルフックと呼ばれる関数
  // 基本的に画面描画時の初期処理を実行するとき(API通信など)にmounted()で処理を定義することが多い※インスタンスが生成された後実行。
    this.$http.get("/api/list").then(response => {
    // this.$http~についてはAxiosを使ったAPIの処理です。 /api/listにアクセスし、取得した結果をthis.listingに代入
    // thenで成功した場合の処理をかける
      this.listing = response.data;
      // 
    });
  },
}
</script>