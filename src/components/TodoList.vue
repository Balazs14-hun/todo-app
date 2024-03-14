<template>
  <TodoCard
    v-for="(todo, index) in model"
    :key="todo.id"
    v-model="model[index]"
    class="mt-7 shadow-lg hover:shadow-none"
  />
</template>

<script setup lang="ts">
import TodoCard from '@/components/TodoCard.vue'
import { Todo } from '@/types/Todo'

const model = defineModel<Todo[]>({ required: true })
</script>
