<template>
  <div>
    <header>
      <h1><router-link to="/">My Note</router-link></h1>
      <router-link to="Login">ログイン</router-link>
      <router-link to="Register">会員登録</router-link>
    </header>
    <main>
      <RouterView
      :lists="lists"
      :cards="cards"
      />
    </main>

    <footer>
    </footer>

  </div>
</template>

<script>
export default {
    data() {
    return {
      lists :'',
      cards :''
      // オブジェクトを配列に代入
    };
  },
  mounted() { 
  // mounted() はVueのインスタンスライフサイクルフックと呼ばれる関数
  // 基本的に画面描画時の初期処理を実行するとき(API通信など)にmounted()で処理を定義することが多い※インスタンスが生成された後実行。
    this.$http.get("/api/list").then(response => {
    // this.$http~についてはAxiosを使ったAPIの処理です。 /api/listにアクセスし、取得した結果をthis.listingに代入
    // thenで成功した場合の処理をかける
      this.lists = response.data;
      // 
    });
    this.$http.get("/api/card").then(response => {
      this.cards = response.data;
    });
  },
}
</script>