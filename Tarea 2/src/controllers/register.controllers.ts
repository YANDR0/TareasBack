import { Request, Response } from "express";
import user from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class RegisterController { 
    emptyPage(req: Request, res: Response){
        res.send('Para crear un nuevo usuario, ingrese sus datos en la ruta: http://localhost:3000/register/data?name=<nombre>&password=<contraseña>');
    }

    async createUser(req: Request, res: Response){
        const username = req.actualUser.name;
        const password = await bcrypt.hash(req.actualUser.password, 10);

        const newUser = new user ({
            name: username,
            password: password
        });
        req.actualUser = newUser;

        try{
            const saved = await newUser.save();
            const data = req.actualUser;
            const token = jwt.sign({data}, process.env.SECRET_KEY as string, { expiresIn: '1h'});
            res.status(200).json(token);
        } catch {
            res.status(500);
        }
    }
}

const registerController = new RegisterController();
export default registerController;