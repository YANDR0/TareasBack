import { Router } from "express";
import Controller from "../controllers/index"

const RegisterController = Controller.registerController;
const router = Router();

router.get('', RegisterController.emptyPage);




export default router;