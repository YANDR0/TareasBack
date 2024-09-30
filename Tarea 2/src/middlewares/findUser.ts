import { Request, Response, NextFunction } from "express";
import User from '../models/user';


export  function findUser(wanted: boolean){
    return async (req: Request, res: Response, next: NextFunction) => {
        
        const user = req.query.name
        console.log(req.query.password)

        try {
            const results = await User.find({name: user});
            if(wanted && !(results.length > 0)) return res.sendStatus(404);
            else if(!wanted && results.length > 0) return res.sendStatus(400);
            //req.user = results[0]
            next();

        } catch(e) {
            console.log('Server error: ', e);
            res.sendStatus(500);
        }
    }
}