import { Router } from 'express';
import Item from '../models/Item';

const router = Router();

router.get('/:mailId', async (req, res) => {
    try {
        const items = await Item.findAll({
            where: { mailId: req.params.mailId }
        });
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching items' });
    }
});

export default router;
