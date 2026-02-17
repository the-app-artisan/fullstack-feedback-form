<script lang="ts" setup>
const model = defineModel<number>();

const ratings = [
  { value: 1, emoji: '😔' },
  { value: 2, emoji: '😐' },
  { value: 3, emoji: '😊' },
  { value: 4, emoji: '😃' },
  { value: 5, emoji: '🤩' },
];
</script>

<template>
  <fieldset>
    <legend class="text-sm/6 font-medium text-gray-900 dark:text-white">
      How was your experience?
    </legend>
    <div class="mt-4 grid grid-cols-1 sm:grid-cols-5 gap-3">
      <div v-for="rating in ratings" :key="rating.value">
        <input
          :id="`rating-${rating.value}`"
          name="rating"
          type="radio"
          :value="rating.value"
          v-model="model"
          required
          class="sr-only peer"
        />
        <label
          :for="`rating-${rating.value}`"
          class="flex items-center justify-center outline-1 outline-gray-300 p-3 rounded-md text-2xl transition-all hover:scale-110 hover:outline-primary peer-checked:outline-primary peer-checked:outline-2 dark:outline-gray-600"
        >
          {{ rating.emoji }}
        </label>
      </div>
    </div>
  </fieldset>
</template>
