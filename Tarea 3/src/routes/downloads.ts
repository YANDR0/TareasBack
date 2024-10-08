import { Router } from "express";
import express from "express";
import path from "path";

const router = Router();

router.get('', (req, res) => {
    res.send('Waaaa')
})

//router.get('', express.static(path.join(__dirname, '..', 'docs')));

export default router;