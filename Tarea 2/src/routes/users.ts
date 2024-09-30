import { Router } from "express";
import Controller from "../controllers/index"

const UsersController = Controller.usersController;
const router = Router();

router.get('', UsersController.getAll);


export default router;