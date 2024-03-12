<script setup lang="ts">
const createTodo = () => {
  console.log('Create todo...')
}
</script>

<template>
  <div class="flex items-center justify-between">
    <h1 class="font-semibold text-7xl">To do list</h1>
    <button @click="createTodo">
      <img src="../assets/svg/add-button.svg" />
    </button>
  </div>
</template>
