import { Router } from "express";
import downloadsRoutes from "./downloads";
import uploadsRoutes from "./uploads";

const router = Router();


router.get('', (req, res) => {
    res.send('Api works!');
})

router.use('/downloads', downloadsRoutes);
router.use('/uploads', uploadsRoutes);

export default router;