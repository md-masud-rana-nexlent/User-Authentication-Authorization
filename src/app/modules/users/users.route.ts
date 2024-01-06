import express, { RequestHandler } from 'express';
import {
  createUser,
  deleteUser,
  getUsers,
  loginUser,
  updateUser,
} from './users.controller';
import checkLogin from '../../../middlewares/checkLogin';

const router = express.Router();

router.get('/', checkLogin as unknown as RequestHandler, getUsers);
router.post('/signup', createUser);
router.post('/login', loginUser);
router.patch('/update-user', updateUser);
router.delete('/:email', deleteUser);

export default router;
