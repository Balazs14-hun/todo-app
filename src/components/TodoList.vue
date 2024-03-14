<template>
  <TodoCard
    v-for="todo in todos"
    :key="todo.id"
    class="mt-7"
    :todo="todo"
  />
</template>

<script setup lang="ts">
import TodoCard from '@/components/TodoCard.vue'
import type Todo from '@/types/Todo'

interface Props {
  todos: Todo[]
}

defineProps<Props>()
</script>
