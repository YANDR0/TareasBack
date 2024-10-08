

function checkQuery(newUser: boolean){
    return async (req: Request, res: Response, next: NextFunction) => {

        let password = req.query.password;
        if(!password) return res.sendStatus(400);
        if(newUser) return next();
        
        password = password.toString();

        try {
            const pass = req.actualUser.password;
            const comparation = await bcrypt.compare(password, pass)

            if(comparation) return next();      
            res.sendStatus(404);

        } catch(e) {
            console.log('Server error: ', e);
            res.sendStatus(500);
        }
    }
}

const download = checkQuery;
