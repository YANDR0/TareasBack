import { Router } from "express";
import UsersController from "../controllers/users.controllers";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

router.get('', authMiddleware, UsersController.getAll);

export default router;