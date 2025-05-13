// src/api/models/User.ts

import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
}

const userSchema = new Schema<IUser>({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
});

const User = model<IUser>('User', userSchema);

export default User;