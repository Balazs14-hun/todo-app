<template>
  <div>
    <div
      class="place-self-center rounded-2xl border-2 border-black text-xs font-bold hover:bg-slate-100 sm:px-5 sm:text-sm"
      @click="openSelect"
    >
      <div>
        {{ selectedOption }}
      </div>
    </div>
    <div
      v-if="isOpen"
      class="place-self-center rounded-2xl border-2 border-t-2 border-black px-4 text-xs font-bold sm:px-5 sm:text-sm"
    >
      <ul class="flex flex-col divide-y">
        <li
          v-for="(priority, index) in backgroundMapper"
          :key="priority"
          class="hover:bg-slate-100"
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

const model = defineModel<Todo>({ required: true })

const selectedOption = ref(model.value.priority)
const isOpen = ref(false)

const backgroundMapper = {
  High: 'bg-orange-600',
  Medium: 'bg-yellow-500',
  Low: 'bg-cyan-400'
}

function openSelect() {
  isOpen.value = !isOpen.value
}
function selectElement(element: Priority) {
  selectedOption.value = element
  model.value.priority = element
  openSelect()
}
</script>
