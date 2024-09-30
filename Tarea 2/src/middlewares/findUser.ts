import { Request, Response, NextFunction } from "express";
import user from '../models/user';
import { User } from "../types/user";


export  function findUser(wanted: boolean){
    return async (req: Request, res: Response, next: NextFunction) => {
        
        const username = req.query.name.toString();
        
        try {
            const results = await user.find({name: username});
            if(wanted && !(results.length > 0)) return res.sendStatus(404);
            else if(!wanted && results.length > 0) return res.sendStatus(400);

            next();

        } catch(e) {
            console.log('Server error: ', e);
            res.sendStatus(500);
        }
    }
}