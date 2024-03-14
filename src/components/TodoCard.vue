<template>
  <div
    v-if="editing"
    class="grid w-72 grid-flow-row grid-cols-2 gap-6 rounded-lg border-2 border-black p-3 sm:w-[30rem]"
  >
    <input
      type="text"
      :value="model.title"
      class="rounded-md border px-1 text-lg font-bold sm:text-xl"
      :placeholder="model.title"
    />
    <BasePriority
      :text="model.priority"
      :bg-color="backgroundMapper[model.priority]"
    />
    <span
      class="textarea col-span-2 text-wrap rounded-md border px-1 text-xs font-semibold text-black sm:text-base"
      role="textbox"
      contenteditable
      :placeholder="model.description"
      >{{ model.description }}</span
    >
    <div class="grid grid-cols-2 gap-2">
      <BaseButton
        :label="'Save'"
        class="bg-emerald-400 text-white"
        @click-event="setEditMode"
      />
      <BaseButton
        :label="'Delete'"
        class="bg-slate-200 text-black"
      />
    </div>
  </div>
  <div
    v-else
    class="grid w-72 grid-cols-2 gap-y-6 rounded-lg border-2 border-black p-3 sm:w-[30rem]"
  >
    <h1
      class="text-lg font-bold sm:text-xl"
      @click="setEditMode"
    >
      {{ model.title }}
    </h1>
    <BasePriority
      :text="model.priority"
      :bg-color="backgroundMapper[model.priority]"
    />
    <p
      class="w-52 text-xs font-semibold text-slate-400 sm:text-base"
      @click="setEditMode"
    >
      {{ model.description }}
    </p>
    <BaseCheckbox v-model="isChecked" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BasePriority from '@/components/BasePriority.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import { Todo } from '@/types/Todo'
import BaseButton from '@/components/BaseButton.vue'

const model = defineModel<Todo>({ required: true })

const isChecked = ref(false)
const editing = ref(false)

const backgroundMapper = {
  High: 'bg-orange-600',
  Medium: 'bg-yellow-500',
  Low: 'bg-cyan-400'
}

function setEditMode() {
  editing.value = !editing.value
}
</script>
