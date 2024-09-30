import { Request, Response, NextFunction } from "express";
import User from '../models/user';
import bcrypt from 'bcrypt';

export  function checkPassword(newUser: boolean){
    return async (req: Request, res: Response, next: NextFunction) => {

        let password = req.query.password;
        if(!password) return res.sendStatus(400);
        if(newUser) return next();
        
        password = password.toString();

        try {
            const pass = req.actualUser.password;
            const comparation = await bcrypt.compare(password, pass)

            if(comparation) return next();      
            res.sendStatus(404);

        } catch(e) {
            console.log('Server error: ', e);
            res.sendStatus(500);
        }
    }
}