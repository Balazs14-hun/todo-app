<template>
  <p
    class="w-fit place-self-center rounded-2xl px-4 text-xs text-white sm:px-5 sm:text-base"
    :class="bgColor"
  >
    {{ text }}
  </p>
</template>

<script setup lang="ts">
interface Props {
  text: string
  bgColor: string
}

defineProps<Props>()
</script>
