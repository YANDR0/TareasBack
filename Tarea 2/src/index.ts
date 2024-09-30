import express from "express";
import routes from './routes';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import { User } from "./types/user";
config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;
const app = express();
console.log(dbUrl)

app.use(routes);

declare global {
    namespace Express {
        interface Request {
            actualUser: User
        }
    }
}



connect(dbUrl as string).then(res => {
    console.log('Ya se conecto!');
    app.listen(port, () => {
        console.log(`App is running in port ${port}`);
    })
}).catch(err => {
    console.log('Ocurrio un error');
});


app.get('', (req, res) => {
    res.send('Todo bien!')
})


