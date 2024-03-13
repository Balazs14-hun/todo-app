<template>
  <div class="flex items-center space-x-10 sm:space-x-28 md:space-x-40 lg:space-x-56">
    <h1 class="text-7xl font-semibold">To do list</h1>
    <PlusCircleIcon
      class="h-14 w-14 cursor-pointer text-green-400"
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
