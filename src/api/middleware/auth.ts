import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader?.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Invalid token format' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Authentication failed' });
    }
};

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}
