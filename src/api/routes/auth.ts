import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/login', (req, res) => {
    // Simple auth for development - replace with proper auth
    const { mcUUID } = req.body;
    if (!mcUUID) {
        return res.status(400).json({ error: 'mcUUID is required' });
    }

    const token = jwt.sign({ mcUUID }, process.env.JWT_SECRET || 'dev_secret');
    res.json({ token });
});

export default router;
