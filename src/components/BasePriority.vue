<template>
  <div
    class="absolute right-2 top-3 cursor-default rounded-2xl font-bold text-white sm:px-5 sm:text-sm"
    :class="bgColor"
  >
    {{ priority }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  priority: string
  bgColor: string
}

defineProps<Props>()
</script>
