import { Request, Response } from "express";
import jwt from 'jsonwebtoken';


class LoginController {
    emptyPage(req: Request, res: Response){
        res.send('Para iniciar sesión, ingrese sus datos en la ruta: http://localhost:3000/login/data?name=<nombre>&password=<contraseña>');
    }

    success(req: Request, res: Response){
      const data = req.actualUser
        const token = jwt.sign({data}, process.env.SECRET_KEY as string, { expiresIn: '1h'});
        res.status(200).json(token);
    }
}

const loginController = new LoginController();
export default loginController;

