<script setup lang="ts">
import { CheckIcon } from '@heroicons/vue/16/solid';
import FeedbackCard from './FeedbackCard.vue';
</script>

<template>
  <FeedbackCard>
    <div class="min-h-72 flex flex-col items-center justify-center">
      <CheckIcon class="text-primary w-16 h-16" />
      <h2
        class="text-xl text-center font-semibold text-gray-900 dark:text-white"
      >
        Thank you for your feedback!
      </h2>
      <p class="mt-1 text-sm/6 text-center text-gray-600 dark:text-gray-400">
        We appreciate your input and will use it to improve our service
      </p>
    </div>
  </FeedbackCard>
</template>
