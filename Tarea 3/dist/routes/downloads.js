"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("../controllers/index"));
const queryDownload_1 = require("../middlewares/queryDownload");
const DownloadsController = index_1.default.downloadsController;
const router = (0, express_1.Router)();
router.get('/', (0, queryDownload_1.checkQuery)(), DownloadsController.success);
exports.default = router;
