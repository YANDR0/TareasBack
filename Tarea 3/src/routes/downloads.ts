import { Router } from "express";
import Controller from "../controllers/index"
import { checkQuery } from "../middlewares/queryDownload";

const DownloadsController = Controller.downloadsController;
const router = Router();


router.get('/', checkQuery(), DownloadsController.success)

export default router;