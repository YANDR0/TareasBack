import { Router } from "express";
import Controller from "../controllers/index"

const LoginController = Controller.loginController;
const router = Router();

router.get('', LoginController.emptyPage);




export default router;


/*
import { Router } from "express";
import { roles } from "../middlewares/auth";
import UsersController from "../controllers/users.controllers";


const router = Router();

router.get('', roles(['admin', 'gerente']), UsersController.listAll);

export default router;
*/