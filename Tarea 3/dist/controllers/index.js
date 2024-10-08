"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const downloads_controller_1 = __importDefault(require("./downloads.controller"));
const uploads_controller_1 = __importDefault(require("./uploads.controller"));
const controllers = {
    downloadsController: downloads_controller_1.default,
    uploadsController: uploads_controller_1.default
};
exports.default = controllers;
