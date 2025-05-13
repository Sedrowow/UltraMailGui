import { Router } from 'express';
import MailModel from '../models/Mail';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const mails = await MailModel.find({ recipient: req.user.mcUUID });
        res.json(mails);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching mails' });
    }
});

router.post('/', async (req, res) => {
    try {
        const mail = new MailModel(req.body);
        await mail.save();
        res.status(201).json(mail);
    } catch (error) {
        res.status(400).json({ error: 'Error creating mail' });
    }
});

export default router;
