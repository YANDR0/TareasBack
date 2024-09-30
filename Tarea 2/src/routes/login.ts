import { Router } from "express";
import Controller from "../controllers/index"
import { findUser } from "../middlewares/findUser";
import { checkPassword } from "../middlewares/auth";


const LoginController = Controller.loginController;
const router = Router();

router.get('', LoginController.emptyPage);
router.get('/data', findUser(true), checkPassword(false), LoginController.success);


export default router;