import { Request, Response, NextFunction } from "express";
import User from '../models/user';


export  function checkPassword(user: string, pasword: string){
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const results = await User.find({name: user});
            if(!(results.length > 0))  return res.sendStatus(404);
            const pass = results[0].password;
            if(pass == pasword) return next();      
            res.sendStatus(404);      
        } catch(e) {
            console.log('Server error: ', e);
            res.sendStatus(500);
        }
    }
}