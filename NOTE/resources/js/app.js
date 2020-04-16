import './bootstrap'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import Board from './components/Board.vue'
import axios from 'axios'

Vue.prototype.$http = axios;

const app = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
    Board
  },
  // template: '<App />'// ルートコンポーネントを描画する
})