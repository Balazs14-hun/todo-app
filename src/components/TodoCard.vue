<template>
  <div
    v-if="editing"
    class="grid w-72 grid-flow-row grid-cols-5 gap-y-6 rounded-lg border-2 border-black p-3 sm:w-[30rem]"
  >
    <input
      v-model="model.title"
      type="text"
      class="col-span-4 mr-2 rounded-md border px-1 text-lg font-bold sm:text-xl"
    />
    <BaseSelect
      v-model="model"
      class="col-start-5"
    />
    <textarea
      v-model="model.description"
      class="textarea col-span-5 resize-y rounded-md border px-1 text-xs font-semibold text-black sm:text-base"
      role="textbox"
      contenteditable
    ></textarea>
    <div class="col-span-3 grid grid-cols-2 gap-4">
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
    class="grid w-72 grid-cols-6 gap-y-6 rounded-lg border-2 border-black p-3 sm:w-[30rem]"
  >
    <h1
      class="col-span-5 break-words text-lg font-bold sm:text-xl"
      @click="setEditMode"
    >
      {{ model.title }}
    </h1>
    <BasePriority
      :text="model.priority"
      :bg-color="backgroundMapper[model.priority]"
      @click="setEditMode"
    />
    <p
      class="col-span-5 break-words text-xs font-semibold text-slate-400 sm:text-base"
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
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import { Todo } from '@/types/Todo'

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
