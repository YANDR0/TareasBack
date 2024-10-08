import { Request, Response } from "express";


class UploadsController {

    emptyPage(req: Request, res: Response){
        res.send('Ruta uploads');
    }

    successOne(req: Request, res: Response){
        console.log('Archivo: ', req.file)
        if (req.file){
            res.send('Se subio el archivo')
        } else {
            res.status(400).send('No se mandó')
        }
    }

    successMultiple(req: Request, res: Response){
        console.log('Archivo: ', req.file)
        if (req.files && req.files.length){
            res.send('Se subieron los archivos')
        } else {
            res.status(400).send('No se mandaron')
        }
    }
}

const uploadsController = new UploadsController();
export default uploadsController;
