import { Request, Response, NextFunction } from "express";
import User from '../models/user';
import bcrypt from 'bcrypt';

export  function checkPassword(newUser: boolean){
    return async (req: Request, res: Response, next: NextFunction) => {

        let password = req.query.password;
        if(!password) return res.sendStatus(400);
        if(newUser) return next();
        
        password = password.toString();
        console.log(password)
        const user = req.query.name.toString();

        try {
            const results = await User.find({name: user});
            if(!(results.length > 0)) return res.sendStatus(404);
            
            const pass = results[0].password;
            const comparation = await bcrypt.compare(password, pass)

            if(comparation) return next();      
            res.sendStatus(404);

        } catch(e) {
            console.log('Server error: ', e);
            res.sendStatus(500);
        }
    }
}