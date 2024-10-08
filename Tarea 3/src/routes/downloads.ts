import { Router } from "express";
import Controller from "../controllers/index"
import { checkQuery } from "../middlewares/queryDownload";

const DownloadsController = Controller.downloadsController;
const router = Router();


router.get('', DownloadsController.emptyPage)
router.get('/:id', checkQuery(), DownloadsController.success)


//router.get('', express.static(path.join(__dirname, '..', 'docs')));

export default router;