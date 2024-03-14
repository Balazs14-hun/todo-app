<template>
  <div class="flex flex-col items-center pt-5">
    <HeaderComponent @create-todo="createTodo" />
    <TodoList
      v-if="todos.length"
      v-model="todos"
    />
    <BaseNoTodo v-else />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import BaseNoTodo from '@/components/BaseNoTodo.vue'
import { Todo } from '@/types/Todo'
import TodoList from '@/components/TodoList.vue'

const todos = ref<Todo[]>([])

function createTodo() {
  todos.value.unshift({
    id: todos.value.length,
    title: 'Best todo',
    description:
      'Do nothing, do nothing, do nothing, do nothing, do nothing, do nothing, do nothing...',
    priority: 'Low',
    isChecked: false
  })
  todos.value.unshift({
    id: todos.value.length,
    title: 'Best todo',
    description: 'Do nothing',
    priority: 'High',
    isChecked: false
  })
  todos.value.unshift({
    id: todos.value.length,
    title: 'Best todo',
    description: 'Do nothing',
    priority: 'Medium',
    isChecked: false
  })
}
</script>
