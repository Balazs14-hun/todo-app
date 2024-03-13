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
  buttonClass: 'rounded-lg border-2 px-4 py-2'
})

const emit = defineEmits(['clickEvent'])

function onClick() {
  emit('clickEvent')
}
</script>
