<template>
  <div class="absolute right-2 top-3 z-10">
    <div
      class="mb-2 cursor-pointer rounded-xl border-2 border-black font-bold sm:pe-3 sm:ps-5 sm:text-sm"
      :class="isSelectOpen ? 'bg-white' : backgroundMapper[model.priority] + ' border-0 text-white'"
      @click="openSelect"
    >
      <div class="flex items-center">
        {{ model.priority }}
        <ChevronDownIcon
          class="ms-4 size-3 stroke-black stroke-1"
          :class="{ 'stroke-white': !isSelectOpen }"
        />
      </div>
    </div>
    <div
      v-if="isSelectOpen"
      class="cursor-pointer rounded-xl border-2 border-black font-bold sm:text-sm"
    >
      <ul class="flex flex-col py-1">
        <li
          v-for="(priority, index) in backgroundMapper"
          :key="priority"
          class="rounded-xl bg-white ps-3 transition hover:bg-slate-100"
          @click="selectElement(index)"
        >
          {{ index }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Todo, Priority } from '@/types/Todo'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'

const model = defineModel<Todo>({ required: true })

const isSelectOpen = ref(false)

const backgroundMapper = {
  High: 'bg-orange-600',
  Medium: 'bg-yellow-500',
  Low: 'bg-cyan-400'
}

const emit = defineEmits(['openSelect'])

function openSelect() {
  isSelectOpen.value = !isSelectOpen.value
  emit('openSelect', isSelectOpen.value)
}
function selectElement(element: Priority) {
  model.value.priority = element
  openSelect()
}
</script>
