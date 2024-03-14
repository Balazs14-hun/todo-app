<template>
  <div class="grid w-72 grid-cols-2 gap-6 rounded-lg border-2 border-black p-3 sm:w-[30rem]">
    <h1 class="text-lg font-bold sm:text-xl">{{ model.title }}</h1>
    <BasePriority
      :text="model.priority"
      :bg-color="backgroundMapper[model.priority]"
    />
    <p class="text-xs font-semibold text-slate-400 sm:text-base">{{ model.description }}</p>
    <BaseCheckbox v-model="isChecked" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BasePriority from '@/components/BasePriority.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import { Todo } from '@/types/Todo'

const model = defineModel<Todo>({ required: true })

const isChecked = ref(false)

const backgroundMapper = {
  High: 'bg-orange-600',
  Medium: 'bg-yellow-500',
  Low: 'bg-teal-500'
}
</script>
