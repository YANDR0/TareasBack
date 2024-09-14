"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const secretKey = '12345';
function authMiddleware(req, res, next) {
    const key = req.query.key;
    if (key === secretKey) {
        return next();
    }
    res.sendStatus(401);
}
