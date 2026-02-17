<script lang="ts" setup>
import type { Notification } from '../types/notifications';

defineProps<Notification>();
</script>

<template>
  <transition name="fade">
    <div
      v-if="message"
      :class="[
        'fixed left-1/2 -translate-x-1/2 top-6 z-50 px-4 py-2 rounded shadow-lg text-sm font-medium text-center ',
        type === 'success'
          ? 'text-green-800 bg-green-100 dark:bg-green-900/80 dark:text-green-100'
          : 'text-red-800 bg-red-100 dark:bg-red-900/80 dark:text-red-100',
      ]"
    >
      {{ message }}
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
