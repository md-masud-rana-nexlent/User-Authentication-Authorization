import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 50001 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
