import type { Feedback } from '../types/feedback';
import { prisma } from '../lib/prisma';

class FeedbackService {
  async save(feedback: Feedback): Promise<void> {
    // Save to database
    await prisma.feedback.create({
      data: feedback,
    });
  }
}

export default new FeedbackService();
