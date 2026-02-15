import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Feedback Form Express Backend',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
