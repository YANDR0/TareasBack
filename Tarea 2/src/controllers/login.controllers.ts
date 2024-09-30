import { Request, Response } from "express";

class LoginController {
    emptyPage(req: Request, res: Response){
        res.send('Para iniciar sesión, ingrese sus datos en la ruta:');
    }
}

const loginController = new LoginController();
export default loginController;