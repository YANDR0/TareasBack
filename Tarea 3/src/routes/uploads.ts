import { Router } from "express";
import upload from "../middlewares/typeVerication";
import Controller from "../controllers/index"

const UploadsController = Controller.uploadsController;

const router = Router();

router.get('', (req, res) => {
    res.send('Ruta uploads')
})

router.post('', upload.single('file'), (req, res) => {
    console.log('Archivo: ', req.file)
    if (req.file){
        res.send('Se subio el archivo')
    } else {
        res.status(400).send('No se mandó')
    }
})

router.post('', upload.array('file'), (req, res) => {
    console.log('Archivo: ', req.file)
    if (req.files && req.files.length){
        res.send('Se subieron los archivos')
    } else {
        res.status(400).send('No se mandó nada')
    }
})


export default router;