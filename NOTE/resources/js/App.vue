<template>
  <div>
    <Board />
    <main>
      <div class="container">
        <RouterView />
      </div>
    </main>
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