"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = __importDefault(require("../controllers/users.controllers"));
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.get('', auth_1.authMiddleware, users_controllers_1.default.getAll);
exports.default = router;
