import { Router } from 'express';
import type { Request, Response } from 'express';
import feedbackController from '../controllers/feedbackController';

const router = Router();

router.post('/', (req: Request, res: Response) =>
  feedbackController.create(req, res),
);

export default router;
