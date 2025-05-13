import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export const generateToken = (userId: string): string => {
    const token = jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });
    return token;
};

export const validateToken = (token: string): string | jwt.JwtPayload => {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
};