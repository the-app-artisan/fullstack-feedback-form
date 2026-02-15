import type { Feedback } from '../types/feedback';

class FeedbackService {
  async save(feedback: Feedback): Promise<void> {
    console.log('Saving feedback', feedback);
  }
}

export default new FeedbackService();
