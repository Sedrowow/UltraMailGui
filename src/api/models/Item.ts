import { Schema, model } from 'mongoose';

interface Item {
    itemType: string;
    amount: number;
    metadata?: string;
    mailId: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

const itemSchema = new Schema<Item>({
    itemType: { type: String, required: true },
    amount: { type: Number, required: true },
    metadata: { type: String },
    mailId: { type: Schema.Types.ObjectId, ref: 'Mail', required: true }
}, {
    timestamps: true
});

const ItemModel = model<Item>('Item', itemSchema);

export default ItemModel;