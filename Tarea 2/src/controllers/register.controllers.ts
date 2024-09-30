import { Request, Response } from "express";

class RegisterController { 
    emptyPage(req: Request, res: Response){
        res.send('Para crear un nuevo usuario, ingrese sus datos en la ruta:');

    }
}

const registerController = new RegisterController();
export default registerController;