<template>
  <button
    :disabled
    :class="buttonClass"
    @click="$emit('clickEvent')"
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
  disabled: false,
  buttonClass: 'rounded-lg border-2 px-4 py-2'
})

defineEmits<{
  (e: 'clickEvent'): void
}>()
</script>
