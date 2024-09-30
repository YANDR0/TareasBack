import { Request, Response, NextFunction } from "express";
import User from '../models/user';


export  function checkPassword(newUser: boolean){
    return async (req: Request, res: Response, next: NextFunction) => {

        let password = req.query.password;
        if(!password) return res.sendStatus(400);
        if(newUser) return next();
        
        password = password.toString();
        const user = req.query.name.toString();

        try {
            const results = await User.find({name: user});
            if(!(results.length > 0)) return res.sendStatus(404);
            const pass = results[0].password;

            //Acá debo desencriptar el coso y revisar
            console.log(password)
            console.log(pass)

            if(pass == password) return next();      
            res.sendStatus(404);

        } catch(e) {
            console.log('Server error: ', e);
            res.sendStatus(500);
        }
    }
}