import { Request, Response } from 'express';
import { MailService } from '../../services/mailService';

export class MailController {
    private mailService: MailService;

    constructor() {
        this.mailService = new MailService();
    }

    public async sendMail(req: Request, res: Response): Promise<void> {
        try {
            const mailData = req.body;
            const result = await this.mailService.sendMail(mailData);
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error sending mail', error });
        }
    }

    public async getMail(req: Request, res: Response): Promise<void> {
        try {
            const playerId = req.params.playerId;
            const mails = await this.mailService.getMailsByPlayerId(playerId);
            res.status(200).json(mails);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving mails', error });
        }
    }

    public async viewMail(req: Request, res: Response): Promise<void> {
        try {
            const mailId = req.params.mailId;
            const mail = await this.mailService.getMailById(mailId);
            res.status(200).json(mail);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving mail', error });
        }
    }
}