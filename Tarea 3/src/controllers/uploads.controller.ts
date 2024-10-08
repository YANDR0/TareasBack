import { Request, Response } from "express";


class UploadsController {

    emptyPage(req: Request, res: Response){
        res.send('Ruta uploads');
    }

    successMultiple(req: Request, res: Response){
        console.log(req.files)
        if (req.files && req.files.length){
            res.send('Se subieron los archivos')
        } else {
            res.status(400).send('No se mandaron')
        }
    }
}

const uploadsController = new UploadsController();
export default uploadsController;
