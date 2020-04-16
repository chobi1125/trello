<template>
  <div>
    <header style="background-color:rgba(0, 217, 255, 0.287)">
      <h1><router-link to="/">My Note</router-link></h1>
      <ul v-if="auth.length === 0">
        <!-- v-if="プロパティ"でプロパティがtrueの時処理。lengthプロパティは配列の要素の数。 -->
        <router-link to="login">ログイン</router-link>
        <router-link to="register">会員登録</router-link>
      </ul>
      <ul v-if="auth.length === 0">
        Hello user
        <a @click="logout">ログアウト</a>
        <form id="logout-form" action="/logout" method="POST" style="display: none;">
          <input type="hidden" name="_token" :value="csrf" />
        </form>
      </ul>
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
    props: {
    auth: {
      type: Object | Array,
      required: true
    },
   },
  data() {
    return {
      lists :'',
      cards :'',
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  },
  mounted() { 
    this.$http.get("/api/list").then(response => {
      this.lists = response.data;
    });
    this.$http.get("/api/card").then(response => {
      this.cards = response.data;
    });
  },
  methods: {
    logout() {
      document.querySelector("#logout-form").submit();
    }
  }
}
</script>