import { Router } from "express";
import Controller from "../controllers/index"

const DownloadsController = Controller.downloadsController;
const router = Router();


router.get('', (req, res) => {
    res.send('Ruta downloads')
})

//router.get('', express.static(path.join(__dirname, '..', 'docs')));

export default router;