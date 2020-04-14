<template>
  <div>
    <header>
      <h1>My Note</h1>
      <p>No tasks</p>
    </header>
    <list-add />
  </div>
</template>

<script>
import ListAdd from './ListAdd.vue'
export default {
  components: {
    ListAdd
  },
}
</script>