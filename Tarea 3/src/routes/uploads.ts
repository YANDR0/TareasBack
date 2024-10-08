import { Router } from "express";

const router = Router();

/*
router.post('/upload', upload.single('file'), (req, res) => {
    console.log('Archivo: ', req.file)
    if (req.file){
        res.send('Se subio el archivo')
    } else {
        res.status(400).send('No se mandó')
    }
})

router.post('/upload', upload.array('file'), (req, res) => {
    console.log('Archivo: ', req.file)
    if (req.files && req.files.length){
        res.send('Se subieron los archivos')
    } else {
        res.status(400).send('No se mandó nada')
    }
})
*/


export default router;