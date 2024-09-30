import { Router } from "express";
import Controller from "../controllers/index"
import { findUser } from "../middlewares/findUser";

const RegisterController = Controller.registerController;
const router = Router();

router.get('', RegisterController.emptyPage);

router.get('/data', findUser(false), RegisterController.emptyPage);




export default router;