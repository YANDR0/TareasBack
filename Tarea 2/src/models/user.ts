import { Schema, model, SchemaTypes } from 'mongoose';
import { User } from '../types/user';

const schema = new Schema({
    name: { type: SchemaTypes.String, required: true },
    email: { type: SchemaTypes.String, default: 'correo@hotmal.xom' },
    password: { type: SchemaTypes.String, required: true },
    role: { type: SchemaTypes.String, default: 'user' },
    status: { type: SchemaTypes.String, default: 'new' }    //new, active, blocked, deleted, archived
});

const user = model<User>('user', schema);
export default user;