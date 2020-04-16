<template>
  <div>
    <div>ログイン</div>
    <form
      ref="observer"
      action="/login"
      id="login"
      method="post"
      @submit.prevent="login()"
    >
      <input type="hidden" name="_token" :value="csrf" />
      <div class="form-group">
        <label for="email">メールアドレス</label>
        <div>
          <input v-model="email" name="email" type="email" />
        </div>
      </div>

      <div class="form-group">
        <label for="password">パスワード</label>
        <div>
          <input
            v-model="password"
            name="password"
            type="password"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <label>
          <input type="checkbox" name="remember" /> ログインを継続する
        </label>
      </div>

      <div class="form-group">
        <button type="submit">ログイン</button>
        <a href="#">パスワードをお忘れですか?</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    };
  },
  methods: {
    async login() {
      document.querySelector("#login").submit();
    }
  }
};
</script>