<script lang="ts" setup>
import { ChevronDownIcon } from '@heroicons/vue/16/solid';
import FeedbackSuccess from './FeedbackSuccess.vue';
import FeedbackCard from './FeedbackCard.vue';
import FeedbackFormRating from './FeedbackFormRating.vue';
import NotificationMessage from './NotificationMessage.vue';
import useFeedbackForm from '../composables/useFeedbackForm';

const {
  form,
  isSubmitting,
  showSuccess,
  notificationMessage,
  notificationType,
  handleSubmit,
} = useFeedbackForm();
</script>

<template>
  <FeedbackSuccess v-if="showSuccess" />

  <FeedbackCard v-else>
    <form @submit="handleSubmit">
      <h2
        class="text-xl text-center font-semibold text-gray-900 dark:text-white"
      >
        Share Your Feedback
      </h2>
      <p class="mt-1 text-sm/6 text-center text-gray-600 dark:text-gray-400">
        We are always looking to improve
      </p>
      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <!-- Name -->
        <div class="col-span-full">
          <label
            for="name"
            class="block text-sm/6 font-medium text-gray-900 dark:text-white"
            >Your Name</label
          >
          <div class="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              autocomplete="name"
              v-model="form.name"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-primary/90"
              placeholder="What should we call you?"
            />
          </div>
        </div>
        <!-- Email -->
        <div class="col-span-full">
          <label
            for="email"
            class="block text-sm/6 font-medium text-gray-900 dark:text-white"
            >Your Email</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              v-model="form.email"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-primary/90"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <!-- Category -->
        <div class="col-span-full">
          <label
            for="category"
            class="block text-sm/6 font-medium text-gray-900 dark:text-white"
            >Category</label
          >
          <div class="mt-2 grid grid-cols-1">
            <select
              id="category"
              name="category"
              autocomplete="category-name"
              v-model="form.category"
              required
              class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-primary/90"
            >
              <option value="">Please select</option>
              <option value="bug">Bug Report</option>
              <option value="feature">Feature Request</option>
              <option value="improvement">Improvement</option>
              <option value="other">Other</option>
            </select>
            <ChevronDownIcon
              class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4 dark:text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
        <!-- Rating -->
        <div class="col-span-full">
          <FeedbackFormRating v-model="form.rating" />
        </div>
        <!-- Message -->
        <div class="col-span-full">
          <label
            for="message"
            class="block text-sm/6 font-medium text-gray-900 dark:text-white"
            >Message</label
          >
          <div class="mt-2">
            <textarea
              name="message"
              id="message"
              rows="3"
              v-model="form.message"
              required
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-primary/90"
              placeholder="Share your thoughts..."
            ></textarea>
          </div>
        </div>
        <!-- Notify -->
        <div class="col-span-full space-y-6">
          <div class="flex gap-3">
            <div class="flex h-6 shrink-0 items-center">
              <div class="group grid size-4 grid-cols-1">
                <input
                  id="notify"
                  name="notify"
                  type="checkbox"
                  v-model="form.notify"
                  class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-primary checked:bg-primary indeterminate:border-primary indeterminate:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                />
                <svg
                  class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    class="opacity-0 group-has-checked:opacity-100"
                    d="M3 8L6 11L11 3.5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    class="opacity-0 group-has-indeterminate:opacity-100"
                    d="M3 7H11"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div class="text-sm/6">
              <label for="notify" class="text-gray-900 dark:text-white">
                Email me about updates
              </label>
            </div>
          </div>
        </div>
        <!-- Submit -->
        <div class="col-span-full">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Feedback' }}
          </button>
        </div>
      </div>
    </form>
  </FeedbackCard>

  <NotificationMessage
    :message="notificationMessage"
    :type="notificationType"
  />
</template>
