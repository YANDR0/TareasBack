"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pdfUpload_1 = __importDefault(require("../middlewares/pdfUpload"));
const index_1 = __importDefault(require("../controllers/index"));
const UploadsController = index_1.default.uploadsController;
const router = (0, express_1.Router)();
router.get('', UploadsController.emptyPage);
router.post('', pdfUpload_1.default.array('docs'), UploadsController.successMultiple);
exports.default = router;
