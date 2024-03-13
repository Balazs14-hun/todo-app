<template>
  <div class="flex items-center space-x-28 sm:space-x-48">
    <h1 class="text-3xl font-bold sm:text-6xl">To do list</h1>
    <PlusCircleIcon
      class="size-10 cursor-pointer text-green-400 sm:size-14"
      @click="createTodo"
    />
  </div>
</template>

<script setup lang="ts">
import { PlusCircleIcon } from '@heroicons/vue/24/solid'

const emit = defineEmits(['createTodo'])

function createTodo() {
  emit('createTodo')
}
</script>
