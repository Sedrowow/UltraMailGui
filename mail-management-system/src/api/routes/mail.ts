import { Router } from 'express';
import Mail from '../models/Mail';
import Item from '../models/Item';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const mails = await Mail.findAll({
            where: { recipient: req.user.mcUUID },
            include: [Item]
        });
        res.json(mails);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching mails' });
    }
});

router.post('/', async (req, res) => {
    try {
        const mail = await Mail.create(req.body);
        if (req.body.items) {
            await Item.bulkCreate(
                req.body.items.map((item: any) => ({
                    ...item,
                    mailId: mail.id
                }))
            );
        }
        res.status(201).json(mail);
    } catch (error) {
        res.status(400).json({ error: 'Error creating mail' });
    }
});

export default router;
