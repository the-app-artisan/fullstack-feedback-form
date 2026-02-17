<script setup lang="ts">
import FeedbackForm from './components/FeedbackForm.vue';
import DarkThemeToggle from './components/DarkThemeToggle.vue';
</script>

<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-900"
  >
    <div class="w-full max-w-xl mx-auto">
      <FeedbackForm />
    </div>

    <DarkThemeToggle />
  </div>
</template>
