import { Request, Response } from "express";


class DownloadsController {

    emptyPage(req: Request, res: Response){
        res.send('Ruta downloads');
    }


    success(req: Request, res: Response){
        res.send('El otro');
    }
}

const downloadsController = new DownloadsController();
export default downloadsController;