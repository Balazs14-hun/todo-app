<template>
  <p
    :class="`${bgColor} w-fit place-self-end rounded-2xl px-4 text-sm text-white sm:px-5 sm:text-base`"
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
