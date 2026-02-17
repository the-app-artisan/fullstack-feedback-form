import { ref } from 'vue';
import type {
  NotificationMessage,
  NotificationType,
} from '../types/notifications';

export default function useNotifications() {
  const notificationMessage = ref<NotificationMessage>(null);
  const notificationType = ref<NotificationType>(null);

  const showNotification = (
    message: NotificationMessage,
    type: NotificationType,
    duration = 4 * 1000,
  ) => {
    notificationMessage.value = message;
    notificationType.value = type;

    setTimeout(() => {
      notificationMessage.value = null;
      notificationType.value = null;
    }, duration);
  };

  return {
    notificationMessage,
    notificationType,
    showNotification,
  };
}
