import { Router } from 'express';
import type { Request, Response } from 'express';

const router = Router();

router.post('/', (req: Request, res: Response) => {
  console.log('Received feedback:', req.body);
  res.json({
    message: 'Feedback received successfully',
  });
});

export default router;
