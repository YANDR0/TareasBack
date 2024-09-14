"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controllers_1 = __importDefault(require("../controllers/usuarios.controllers"));
const auth_1 = require("../middlewares/auth");
const router = (0, express_1.Router)();
router.get('', (0, auth_1.roles)(['admin', 'gerente']), usuarios_controllers_1.default.listAll);
exports.default = router;
