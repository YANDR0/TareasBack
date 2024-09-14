"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UsuariosController {
    listAll(req, res) {
        res.send('Lista de usuarios');
    }
}
const usuariosController = new UsuariosController();
exports.default = usuariosController;
