<template>
  <div class="flex flex-col items-center pt-5">
    <HeaderComponent @create-todo="createTodo" />
    <TodoList
      v-if="todos.length"
      :todos="todos"
    />
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
    id: Math.random(),
    title: 'Best todo',
    description:
      'Do nothing, do nothing, do nothing, do nothing, do nothing, do nothing, do nothing...',
    priority: 'Low',
    done: false
  })
  todos.value.unshift({
    id: Math.random(),
    title: 'Best todo',
    description: 'Do nothing',
    priority: 'High',
    done: false
  })
  todos.value.unshift({
    id: Math.random(),
    title: 'Best todo',
    description: 'Do nothing',
    priority: 'Medium',
    done: false
  })
}
</script>
