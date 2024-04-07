import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express server with TypeScript!');
});

app.get('/api/appleLogin', (req: Request, res: Response) => {
    res.send('appleLogin');
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});