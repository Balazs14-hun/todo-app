<template>
  <div class="flex items-center justify-between">
    <h1 class="text-7xl font-semibold">To do list</h1>
    <PlusCircleIcon
      class="h-14 w-14 cursor-pointer text-green-400"
      @click="createTodo"
    />
  </div>
</template>

<script setup lang="ts">
import { PlusCircleIcon } from '@heroicons/vue/24/solid'

function createTodo() {
  console.log('Create todo...')
}
</script>
