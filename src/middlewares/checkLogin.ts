import { NextFunction, Request } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const checkLogin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    const token = authorization?.split(' ')[1] as string;

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string,
    ) as Record<string, unknown>;

    const { firstName } = decoded;

    req.userName = firstName;

    next();
  } catch {
    next('authentication failed');
  }
};

export default checkLogin;
