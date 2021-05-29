<template>
  <div>
    <p>All: no tasks</p>
    <p>list title</p>
    <div v-for="list in lists" :key="list.id">
      {{ list.title }}
    </div>
    <p>card total: 0</p>
    <p>card title</p>
    <div v-for="(card, index) in cards" :key="index">
      {{card.title}} {{card.status}}
    </div>
    <button @click="removeCardFromList">card delete</button>
    <button @click="removeList">list delete</button>
    <form @submit.prevent="addList">
      <input v-model="title" type="text" placeholder="Add new list">
      <button type="submit">リスト追加</button>
    </form>
    <form @submit.prevent="addCardToList">
      <input v-model="body" type="text" placeholder="Add new card"/>
      <button type="submit">カード追加</button>
    </form>
    <div style="display:none">
      {{ lists[0].title }}
      {{ cards[0].title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lists: {
      type: Array
    },
    cards: {
      type: Array
    }
   }
  }
</script>