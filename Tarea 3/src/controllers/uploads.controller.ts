import { Request, Response } from "express";


class UploadsController {

    /*
    emptyPage(req: Request, res: Response){
        res.send('Para iniciar sesión, ingrese sus datos en la ruta: http://localhost:3000/login/data?name=<nombre>&password=<contraseña>');
    }

    success(req: Request, res: Response){
      const data = req.actualUser
        const token = jwt.sign({data}, process.env.SECRET_KEY as string, { expiresIn: '1h'});
        res.status(200).json(token);
    }*/
}

const uploadsController = new UploadsController();
export default uploadsController;
