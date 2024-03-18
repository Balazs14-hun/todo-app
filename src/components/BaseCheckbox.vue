<template>
  <div
    class="relative cursor-pointer"
    @click="checkCheckbox"
  >
    <input
      v-model="model"
      class="peer sr-only"
      type="checkbox"
    />
    <div
      class="size-6 rounded-full border-4 border-black transition peer-checked:border-green-500 peer-checked:opacity-70 sm:size-7"
    ></div>
    <CheckIcon
      class="invisible absolute -top-2 size-8 stroke-green-500 stroke-2 opacity-90 transition-all peer-checked:visible peer-checked:size-7 sm:size-10 peer-checked:sm:size-8"
    />
  </div>
</template>

<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/20/solid'

const model = defineModel<boolean>()

function checkCheckbox() {
  model.value = !model.value
}
</script>
