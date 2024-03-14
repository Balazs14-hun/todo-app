<template>
  <button
    :disabled
    :class="buttonClass"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label?: string
  disabled?: boolean
  buttonClass?: string
}

withDefaults(defineProps<Props>(), {
  label: 'BaseButton',
  buttonClass: 'sm:rounded-xl rounded-lg text-xs sm:text-sm font-bold py-1 sm:px-4 sm:py-2'
})

const emit = defineEmits(['clickEvent'])

function onClick() {
  emit('clickEvent')
}
</script>
