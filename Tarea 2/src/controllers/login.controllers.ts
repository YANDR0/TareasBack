import { Request, Response } from "express";

class LoginController {
    emptyPage(req: Request, res: Response){
        res.send('Para iniciar sesión, ingrese sus datos en la ruta: http://localhost:3000/login/data?name=<nombre>&password=<contraseña>');
    }

    success(req: Request, res: Response){
        res.send(req.actualUser);
    }
}

const loginController = new LoginController();
export default loginController;