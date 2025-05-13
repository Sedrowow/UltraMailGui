// src/api/models/Mail.ts

import { Schema, model } from 'mongoose';

interface Mail {
    sender: string;
    recipient: string;
    subject: string;
    body: string;
    items: {
        itemType: string;
        amount: number;
        metadata?: string;
    }[];
    serverName: string;
    mcUUID: string;
    createdAt: Date;
    updatedAt: Date;
}

const mailSchema = new Schema<Mail>({
    sender: { type: String, required: true },
    recipient: { type: String, required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    items: [{
        itemType: { type: String, required: true },
        amount: { type: Number, required: true },
        metadata: { type: String }
    }],
    serverName: { type: String, required: true },
    mcUUID: { type: String, required: true }
}, {
    timestamps: true,
});

const MailModel = model<Mail>('Mail', mailSchema);

export default MailModel;