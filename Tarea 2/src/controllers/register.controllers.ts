import { Request, Response } from "express";
import user from '../models/user';
import bcrypt from 'bcrypt';


class RegisterController { 
    emptyPage(req: Request, res: Response){
        res.send('Para crear un nuevo usuario, ingrese sus datos en la ruta: http://localhost:3000/register/data?name=<nombre>&password=<contraseña>');
    }

    async createUser(req: Request, res: Response){
        let password = req.actualUser.password;
        const username = req.actualUser.name;

        password = await bcrypt.hash(password, 10);

        const newUser = new user ({
            name: username,
            password: password
        });

        try{
            const saved = await newUser.save();
            res.send(req.actualUser);
        } catch {
            res.status(500);
        }
    }
}

const registerController = new RegisterController();
export default registerController;