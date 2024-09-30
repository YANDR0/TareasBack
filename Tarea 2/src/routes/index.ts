import { Router } from "express";
import loginRoutes from './login';
import registerRoutes from './register'

const router = Router();

router.use('/register', registerRoutes);
router.use('/login', loginRoutes);

export default router;