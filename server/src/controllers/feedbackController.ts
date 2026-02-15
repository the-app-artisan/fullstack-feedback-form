import type { Request, Response } from 'express';
import type { Feedback } from '../types/feedback';

class FeedbackController {
  async create(req: Request, res: Response) {
    const feedback = req.body as Feedback;

    console.log('Received feedback in controller: ', feedback);

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
    });
  }
}

export default new FeedbackController();
