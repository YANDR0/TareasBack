import { Request, Response, NextFunction } from "express";

export function checkQuery(){
    return async (req: Request, res: Response, next: NextFunction) => {

        let password = req.query.password;
        res
        if(!password) return res.sendStatus(400);
        //if(newUser) return next();
        
        password = password.toString();
    }
}

