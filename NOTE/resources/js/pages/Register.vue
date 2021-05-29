<template>
  <div>
    <div>ユーザー登録</div>
    <form
      ref="observer"
      action="/register"
      id="register"
      method="post"
      @submit.prevent="register()" 
    >
      <input type="hidden" name="_token" :value="csrf" />
      <div class="form-group">
        <label for="name">名前</label>
        <div>
          <input v-model="name" name="name" type="text" />
        </div>
      </div>

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
        <label for="password-confirm">パスワード再確認</label>
        <div>
          <input
            v-model="password_confirmation"
            name="password_confirmation"
            type="password"
            class="form-control"
          />
        </div>
      </div>

      <div class="form-group">
        <div>
          <button type="submit">登録</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      csrf: document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content"),
    };
  },
  methods: {
    async register() {
      document.querySelector("#register").submit();
    }
  }
};
</script>