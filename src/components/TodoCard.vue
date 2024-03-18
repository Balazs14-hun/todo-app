<template>
  <!-- mobile -->
  <div class="mt-7 sm:hidden">
    <!-- Edit Todo Card -->
    <div
      v-if="editing"
      class="flex w-72 flex-col rounded-2xl border-2 border-black p-3"
    >
      <div class="flex items-center justify-between gap-1">
        <div class="">
          <input
            v-model="model.title"
            type="text"
            class="w-[90%] truncate rounded-md text-lg font-bold"
            :class="{ 'pointer-events-none opacity-40': isSelectOpen }"
          />
          <div class="flex items-center space-x-1">
            <CalendarDaysIcon class="size-3" />
            <p class="line-clamp-3 break-words text-xs">
              {{ model.createdAt }}
            </p>
          </div>
        </div>
        <BaseRadio
          v-model="model.priority"
          :bg-color="backgroundMapper['Low']"
          :value="'Low'"
          class="flex-shrink-0"
        /><BaseRadio
          v-model="model.priority"
          :bg-color="backgroundMapper['Medium']"
          :value="'Medium'"
          class="flex-shrink-0"
        /><BaseRadio
          v-model="model.priority"
          :bg-color="backgroundMapper['High']"
          :value="'High'"
          class="flex-shrink-0"
        />
      </div>
      <textarea
        v-model="model.description"
        class="max-h-40 min-h-7 resize-y rounded-md text-sm font-semibold text-slate-400"
      ></textarea>
      <div class="space-x-2">
        <BaseButton
          :label="'Save'"
          class="w-14 bg-emerald-400 text-white"
          @click-event="setEditMode"
        />
        <BaseButton
          :label="'Delete'"
          class="w-14 bg-slate-200 text-black"
          @click-event="deleteTodo"
        />
      </div>
    </div>
    <!-- Todo Card -->
    <div
      v-else
      class="flex w-72 flex-row items-center rounded-2xl border-2 border-black p-3"
    >
      <BaseCheckbox
        v-model="isChecked"
        class="basis-1/6"
      />
      <div class="grow basis-4/6">
        <h1
          class="w-44 truncate text-lg font-bold sm:text-xl"
          @click="setEditMode"
        >
          {{ model.title }}
        </h1>
        <p
          class="line-clamp-3 break-words text-xs text-slate-400 sm:text-base"
          @click="setEditMode"
        >
          {{ model.createdAt }}
        </p>
      </div>
      <BaseRadio
        v-model="model.priority"
        :bg-color="backgroundMapper[model.priority]"
        @click="setEditMode"
      />
    </div>
  </div>
  <!-- desktop -->
  <div class="mt-7 hidden shadow-lg hover:shadow-none sm:block">
    <!-- Edit Todo Card -->
    <div
      v-if="editing"
      class="relative grid w-72 grid-cols-5 gap-y-6 rounded-lg border-2 border-black p-3 sm:w-[30rem]"
    >
      <input
        v-model="model.title"
        type="text"
        class="col-span-3 mr-2 rounded-md px-1 text-lg font-bold sm:text-xl"
        :class="{ 'pointer-events-none opacity-40': isSelectOpen }"
      />
      <BaseSelect
        v-model="model"
        @open-select="(isOpen) => (isSelectOpen = isOpen)"
      />
      <textarea
        v-model="model.description"
        class="col-span-4 max-h-40 min-h-7 resize-y rounded-md px-1 text-xs font-semibold sm:text-base"
        :class="{ 'pointer-events-none opacity-40': isSelectOpen }"
      ></textarea>
      <div
        class="col-span-2 grid grid-cols-2 gap-3"
        :class="{ 'pointer-events-none opacity-40': isSelectOpen }"
      >
        <BaseButton
          :label="'Save'"
          class="bg-emerald-400 text-white"
          @click-event="setEditMode"
        />
        <BaseButton
          :label="'Delete'"
          class="bg-slate-200 text-black"
          @click-event="deleteTodo"
        />
      </div>
    </div>
    <!-- Todo Card -->
    <div
      v-else
      class="relative grid w-72 grid-cols-6 gap-y-6 rounded-lg border-2 border-black p-3 sm:w-[30rem]"
    >
      <h1
        class="col-span-5 truncate break-words text-lg font-bold sm:text-xl"
        @click="setEditMode"
      >
        {{ model.title }}
      </h1>
      <BasePriority
        :priority="model.priority"
        :bg-color="backgroundMapper[model.priority]"
        @click="setEditMode"
      />
      <p
        class="col-span-5 line-clamp-3 break-words text-xs font-semibold text-slate-400 sm:text-base"
        @click="setEditMode"
      >
        {{ model.description }}
      </p>
      <BaseCheckbox
        v-model="isChecked"
        class="place-self-end"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BasePriority from '@/components/BasePriority.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseRadio from '@/components/BaseRadio.vue'
import { Todo } from '@/types/Todo'
import { CalendarDaysIcon } from '@heroicons/vue/20/solid'

const model = defineModel<Todo>({ required: true })

const isChecked = ref(false)
const editing = ref(false)
const isSelectOpen = ref(false)

const backgroundMapper = {
  High: 'bg-orange-600',
  Medium: 'bg-yellow-500',
  Low: 'bg-cyan-400'
}

function setEditMode() {
  editing.value = !editing.value
}
function deleteTodo() {
  console.log('Delete todo...')
  setEditMode()
}
</script>
