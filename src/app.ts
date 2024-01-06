import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './app/modules/users/users.route';
const app = express();
dotenv.config();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRouter);
app.get('/', (req, res) => {
  res.send('Express + TypeScript Server');
});

export default app;
