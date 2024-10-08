import { Router } from "express";
import donwloadsRoutes from "./donwloads";
import uploadsRoutes from "./uploads";


const router = Router();

router.get('', (req, res) => {
    res.send('Api works!');
})

router.use('/downloads', donwloadsRoutes);
router.use('/uploads', uploadsRoutes);


export default router;