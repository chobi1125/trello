<template>
  <div>
    <header>
      <h1><router-link to="/">My Note</router-link></h1>
      <router-link to="Login">ログイン</router-link>
      <router-link to="Register">会員登録</router-link>
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
      <h4>以下はapi/listで取得したデータです。</h4>
      <div v-for="(list, index) in listing" :key="index">
        <!-- v-for="(info, index) in listing"はlisting配列について繰り返し処理 -->
        <p>{{list.title}}</p>
      </div>
      <h4>以下はapi/cardで取得したデータです。</h4>
      <div v-for="(card, index) in card" :key="index">
        <!-- v-for="(info, index) in listing"はlisting配列について繰り返し処理 -->
        <p>{{card.title}} {{card.status}}</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listing :[], // 追加
      card :[]
    };
  },
  components: {
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
    this.$http.get("/api/card").then(response => {
      this.card = response.data;
    });
  },
}
</script>