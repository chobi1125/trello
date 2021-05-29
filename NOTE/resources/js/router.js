import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import Board from './components/Board.vue'

// VueRouterプラグインを使用する
// これによって<RouterView />コンポーネントなどを使うことができる
Vue.use(VueRouter)

// パスとコンポーネントのマッピング
const routes = [
  {
    path: '/',
    name: 'board',
    component: Board
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

// VueRouterインスタンスを作成する
const router = new VueRouter({
  mode: 'history', 
  routes
})
// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router