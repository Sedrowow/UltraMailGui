import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { validateBearerToken } from '../../utils/validators';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization;
        
        if (!validateBearerToken(token)) {
            return res.status(401).json({ error: 'Invalid token format' });
        }

        const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET!);
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
