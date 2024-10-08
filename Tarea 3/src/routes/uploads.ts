import { Router } from "express";
import upload from "../middlewares/pdfUpload";
import Controller from "../controllers/index"

const UploadsController = Controller.uploadsController;

const router = Router();

router.get('', UploadsController.emptyPage)

router.post('', upload.array('docs'), UploadsController.successMultiple)


export default router;