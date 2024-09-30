import { Request, Response } from "express";
import User from './../models/user';

class UsersController {

    async getAll(req: Request, res: Response) {
        try {
            const users  = await User.find({});
            res.send(users);
        } catch (e) {
            console.log('Server error: ', e);
            res.sendStatus(500);
        }   
    }

}

const controller = new UsersController();

export default controller;