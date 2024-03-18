<template>
  <input
    v-model="priority"
    type="radio"
    :value="value"
    class="sr-only"
  />
  <div
    v-if="priority === value"
    class="size-3 rounded-full border-2 border-black"
    :class="bgColor"
  ></div>
  <div
    v-else
    class="size-3 rounded-full"
    :class="bgColor"
    @click="onClick"
  ></div>
</template>

<script setup lang="ts">
import { Priority } from '@/types/Todo'

interface Props {
  bgColor: string
  value?: Priority
}

const props = defineProps<Props>()

const priority = defineModel<Priority>()

function onClick() {
  if (props.value) {
    priority.value = props.value
  }
}
</script>
