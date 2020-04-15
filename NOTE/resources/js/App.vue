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

    </footer>
  </div>
</template>

<script>
import Board from './components/Board.vue'

export default {
  // name: 'app', // 不要説？？
  components: {
    Board
  }
}
</script>