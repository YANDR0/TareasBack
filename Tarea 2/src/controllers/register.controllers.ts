import { Request, Response } from "express";
import user from '../models/user';


class RegisterController { 
    emptyPage(req: Request, res: Response){
        res.send('Para crear un nuevo usuario, ingrese sus datos en la ruta: http://localhost:3000/register/data?name=<nombre>&password=<contraseña>');
    }

    async createUser(req: Request, res: Response){
        const password = req.query.password.toString();
        const username = req.query.name.toString();

        const newUser = new user ({
            name: username,
            password: password
        });

        try{
            const saved = await newUser.save();
            res.send("Creado con exito");
        } catch {
            res.status(500);
        }
    }
}

const registerController = new RegisterController();
export default registerController;