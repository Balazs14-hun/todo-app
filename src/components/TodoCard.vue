<template>
  <div class="grid w-72 grid-cols-2 gap-6 rounded-lg border-2 border-black p-3 sm:w-[30rem]">
    <h1 class="text-lg font-bold sm:text-xl">{{ todo.title }}</h1>
    <BasePriority
      v-if="todo.priority === 'High'"
      :text="todo.priority"
      :bg-color="'bg-orange-600'"
    />
    <BasePriority
      v-else-if="todo.priority === 'Medium'"
      :text="todo.priority"
      :bg-color="'bg-yellow-500'"
    />
    <BasePriority
      v-else
      :text="todo.priority"
      :bg-color="'bg-teal-500'"
    />
    <p class="text-xs font-semibold text-slate-400 sm:text-base">{{ todo.description }}</p>
    <label class="relative cursor-pointer place-self-end">
      <input
        class="peer sr-only"
        type="checkbox"
      />
      <div
        class="size-5 rounded-full border-4 border-black peer-checked:border-green-500 sm:size-7"
      ></div>
      <CheckIcon
        class="invisible absolute -top-2 size-6 stroke-green-500 stroke-2 opacity-90 peer-checked:visible sm:size-8"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import BasePriority from '@/components/BasePriority.vue'
import { CheckIcon } from '@heroicons/vue/20/solid'
import type Todo from '@/types/Todo'

interface Props {
  todo: Todo
}

defineProps<Props>()
</script>
