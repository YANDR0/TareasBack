import { Router } from "express";
import Controller from "../controllers/index"
import { findUser } from "../middlewares/findUser";
import { checkPassword } from "../middlewares/auth";

const RegisterController = Controller.registerController;
const router = Router();

router.get('', RegisterController.emptyPage);
router.get('/data', findUser(false), checkPassword(true),RegisterController.createUser);




export default router;