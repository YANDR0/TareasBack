"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UploadsController {
    emptyPage(req, res) {
        res.send('Ruta uploads');
    }
    successMultiple(req, res) {
        console.log(req.files);
        if (req.files && req.files.length) {
            res.send('Se subieron los archivos');
        }
        else {
            res.status(400).send('No se mandaron');
        }
    }
}
const uploadsController = new UploadsController();
exports.default = uploadsController;
