import { prisma, Prisma } from '../lib/prisma';

class FeedbackService {
  async save(feedback: Prisma.FeedbackCreateInput): Promise<void> {
    // Save to database
    await prisma.feedback.create({
      data: feedback,
    });
  }
}

export default new FeedbackService();
