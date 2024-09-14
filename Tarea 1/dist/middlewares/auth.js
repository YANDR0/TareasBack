"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roles = roles;
const onlyUser = {
    name: "Juana",
    rol: "admin"
};
function roles(allowedRoles) {
    return (req, res, next) => {
        if (allowedRoles.includes(onlyUser.rol))
            return next();
        res.sendStatus(403);
    };
}
