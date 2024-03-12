<template>
  <div class="flex items-center justify-between">
    <h1 class="font-semibold text-7xl">To do list</h1>
    <BaseButton>
      <PlusCircleIcon class="w-14 h-14 text-green-400 cursor-pointer" @click="createTodo" />
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import { PlusCircleIcon } from '@heroicons/vue/24/solid'

function createTodo() {
  console.log('Create todo...')
}
</script>
