import { Request, Response, NextFunction } from "express";


const secretKey = '12345'

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const key = req.query.key;
    if(key === secretKey){
        return next();  
    }
    
    res.sendStatus(401);
}