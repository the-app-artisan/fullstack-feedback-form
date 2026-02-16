import express from 'express';
import type { Request, Response } from 'express';
import feedbackRoutes from './routes/feedbackRoutes';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Feedback Form Express Backend',
  });
});

app.use('/api/feedback', feedbackRoutes);

app.use((req: Request, res: Response) => {
  res.status(404).type('text').send('Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
