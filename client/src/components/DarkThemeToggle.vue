<script lang="ts" setup>
import useDarkMode from '../composables/useDarkMode';

const { isDarkMode, toggleTheme } = useDarkMode();
</script>

<template>
  <div class="flex items-center gap-3 mt-8">
    <span class="text-sm text-gray-600 dark:text-gray-400">
      {{ isDarkMode ? 'Dark' : 'Light' }} Mode
    </span>

    <button
      @click="toggleTheme"
      class="relative inline-flex items-center h-6 transition-colors bg-gray-200 rounded-full w-11 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    >
      <span
        :class="[
          isDarkMode ? 'translate-x-6' : 'translate-x-1',
          'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
        ]"
      />
    </button>

    <span class="text-sm text-gray-600 dark:text-gray-400">
      {{ isDarkMode ? '🌙' : '☀️' }}
    </span>
  </div>
</template>
