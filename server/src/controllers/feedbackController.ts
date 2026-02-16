import type { Request, Response } from 'express';
import feedbackService from '../services/feedbackService';
import { feedbackSchema } from '../validators/feedbackValidator';

type FeedbackServiceType = typeof feedbackService;

class FeedbackController {
  constructor(private feedbackService: FeedbackServiceType) {}

  async create(req: Request, res: Response) {
    // Validate request body
    const validation = feedbackSchema.safeParse(req.body);

    if (!validation.success) {
      res.status(400).json({
        success: false,
        errors: validation.error.issues.map((err) => err.message),
      });
      return;
    }

    const feedback = validation.data;

    // Save feedback using the service
    await this.feedbackService.save(feedback);

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
    });
  }
}

export default new FeedbackController(feedbackService);
