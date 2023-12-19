import { Request, Response } from 'express';
import { getPostsFromDB } from './posts.service';

export const getPosts = async (req: Request, res: Response) => {
  const post = await getPostsFromDB();
  res.status(200).json({
    status: 'success',
    data: post,
  });
};
