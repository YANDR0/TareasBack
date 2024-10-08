"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
var fs = require('fs');
class DownloadsController {
    success(req, res) {
        let file = req.body;
        try {
            var data = fs.readFileSync(path_1.default.join(__dirname, '..', '..', 'documents', file));
            res.contentType("application/pdf");
            res.send(data);
        }
        catch (_a) {
            res.sendStatus(404);
        }
    }
}
const downloadsController = new DownloadsController();
exports.default = downloadsController;
