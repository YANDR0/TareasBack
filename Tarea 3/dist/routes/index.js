"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const downloads_1 = __importDefault(require("./downloads"));
const uploads_1 = __importDefault(require("./uploads"));
const router = (0, express_1.Router)();
router.get('', (req, res) => {
    res.send('Api works!');
});
router.use('/downloads', downloads_1.default);
router.use('/uploads', uploads_1.default);
exports.default = router;
