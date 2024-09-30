import { Router } from "express";
import loginRoutes from './login';
import registerRoutes from './register'
import usersRoutes from './users'

const router = Router();

router.use('/register', registerRoutes);
router.use('/login', loginRoutes);
router.use('/users', usersRoutes);

export default router;