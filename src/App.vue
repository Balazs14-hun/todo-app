<template>
  <div class="flex flex-col items-center">
    <HeaderComponent @create-todo="createTodo" />
    <TodoList v-if="todos.length" />
    <BaseNoTodo v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import BaseNoTodo from '@/components/BaseNoTodo.vue'
import type Todo from '@/types/Todo'
import TodoList from '@/components/TodoList.vue'

const todos = ref<Todo[]>([])

function createTodo() {
  todos.value.unshift({
    id: 1,
    title: 'Best todo',
    description: 'Do nothing',
    priority: 'high',
    done: false
  })
}
</script>
