import { Request, Response, NextFunction } from "express";

export function checkQuery(){
    return async (req: Request, res: Response, next: NextFunction) => {
        let file = req.query.file;
        if(!file) return res.sendStatus(400);
        req.body = file.toString();
        next();
    }
}

