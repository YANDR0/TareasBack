import { Request, Response } from "express";
import express from "express";
import path from "path";
var fs = require('fs');


class DownloadsController {

    success(req: Request, res: Response){
        let file = req.body;
        try{
            var data = fs.readFileSync(path.join(__dirname, '..', '..', 'docs', file));
            res.contentType("application/pdf");
            res.send(data);
        } catch {
            res.sendStatus(404);
        }
    }
}

const downloadsController = new DownloadsController();
export default downloadsController;