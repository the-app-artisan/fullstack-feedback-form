import type { Request, Response } from 'express';
import type { Feedback } from '../types/feedback';
import feedbackService from '../services/feedbackService';

type FeedbackServiceType = typeof feedbackService;

class FeedbackController {
  constructor(private feedbackService: FeedbackServiceType) {}

  async create(req: Request, res: Response) {
    const feedback = req.body as Feedback;

    // Save feedback using the service
    await this.feedbackService.save(feedback);

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
    });
  }
}

export default new FeedbackController(feedbackService);
