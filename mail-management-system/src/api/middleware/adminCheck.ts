import { Request, Response, NextFunction } from 'express';
import { User } from '../models/User';

export const adminCheck = async (req: Request, res: Response, next: NextFunction) => {
    const userId = req.user?.id; // Assuming user ID is stored in req.user after authentication

    if (!userId) {
        return res.status(403).json({ message: 'Access denied. No user ID provided.' });
    }

    try {
        const user = await User.findById(userId);
        
        if (!user || !user.isAdmin) {
            return res.status(403).json({ message: 'Access denied. User is not an admin.' });
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: 'Server error.' });
    }
};