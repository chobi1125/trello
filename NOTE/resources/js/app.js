// import './bootstrap' //不要説？？
import Vue from 'vue'
import router from './router'
import App from './App.vue'
import Example from './components/Example'

const app = new Vue({
  el: '#app',
  router,
  components: {
    // Vue Router管理下
    App,
    // ただのコンポーネント
    Example
  },
  // template: '<App />'// ルートコンポーネントを描画する
})