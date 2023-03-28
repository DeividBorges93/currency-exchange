import { NextFunction, Request, Response } from 'express';
import UserService from '../services/user.service';
import authMiddleware from '../middlewares/authMiddleware';


export default class UserController {
  constructor(private userService = new UserService()) {}

  public register = async (req: Request, res: Response, next: NextFunction) => {

    const newUser = await this.userService.register(req.body);

    return res.status(201).json(newUser);
  }
};
