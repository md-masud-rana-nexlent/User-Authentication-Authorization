import { Request, Response } from 'express';
import {
  createUserToDb,
  deleteUserToDb,
  getLoginUserFromDb,
  getUsersFromDb,
  updateUserToDb,
} from './users.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createUser = async (req: Request, res: Response) => {
  const data = req.body;
  const user = await createUserToDb(data);
  res.status(200).json({
    status: 'success',
    data: user,
  });
};
export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersFromDb();
  res.status(200).json({
    status: 'success',
    data: users,
  });
};

export const loginUser = async (req: Request, res: Response) => {
  const accessToken = await getLoginUserFromDb(req.body.email);

  res.status(200).json({
    status: 'success',
    'access-token': accessToken,
  });
};

export const updateUser = async (req: Request, res: Response) => {
  const user = req.body;

  const updateUser = await updateUserToDb(user);
  res.status(200).json({
    status: 'success',
    data: updateUser,
  });
};

export const deleteUser = async (req: Request, res: Response) => {
  const email = req.params.email;

  const newUsers = await deleteUserToDb(email);
  res.status(200).json({
    status: 'success',
    date: newUsers,
  });
};
