import { Request, Response } from 'express';
import { User } from '../models/User';
import { TokenService } from '../../services/tokenService';

export class AuthController {
    async login(req: Request, res: Response) {
        const { username, password } = req.body;

        // Implement authentication logic here
        const user = await User.findOne({ username });

        if (user && user.password === password) {
            const token = TokenService.generateToken(user);
            return res.json({ token });
        }

        return res.status(401).json({ message: 'Invalid credentials' });
    }

    async register(req: Request, res: Response) {
        const { username, password } = req.body;

        // Implement user registration logic here
        const newUser = new User({ username, password });
        await newUser.save();

        return res.status(201).json({ message: 'User registered successfully' });
    }

    async getUser(req: Request, res: Response) {
        const userId = req.params.id;

        // Implement logic to get user details
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.json(user);
    }
}