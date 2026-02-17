import { reactive, ref } from 'vue';
import type { Feedback } from '../types/feedback';
import useNotifications from './useNotifications';

export default function useFeedbackForm() {
  const createInitialFormState = () => ({
    name: '',
    email: '',
    category: '',
    rating: 0,
    message: '',
    notify: true,
  });

  const form = reactive<Feedback>(createInitialFormState());

  const isSubmitting = ref(false);
  const showSuccess = ref(false);

  const { notificationMessage, notificationType, showNotification } =
    useNotifications();

  // Submit the form
  const sendRequest = async () => {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      throw new Error('Failed to submit feedback');
    }

    return await response.json();
  };

  const reset = () => {
    Object.assign(form, createInitialFormState());
  };

  const handleSubmit = async (event: SubmitEvent) => {
    event.preventDefault();

    if (isSubmitting.value) return;
    isSubmitting.value = true;

    try {
      await sendRequest();

      showSuccess.value = true;

      showNotification(
        'Thank you! Your feedback has been submitted successfully',
        'success',
      );

      reset();
    } catch (error) {
      console.error('Error submitting form:', error);

      showNotification(
        'Sorry, there was an error submitting your feedback. Please try again',
        'error',
        3 * 1000,
      );
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    form,
    isSubmitting,
    showSuccess,
    notificationMessage,
    notificationType,
    handleSubmit,
  };
}
