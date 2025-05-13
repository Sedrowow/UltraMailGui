import { Request, Response } from 'express';
import Item from '../models/Item';

class ItemController {
    async createItem(req: Request, res: Response) {
        try {
            const newItem = new Item(req.body);
            await newItem.save();
            res.status(201).json(newItem);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getItems(req: Request, res: Response) {
        try {
            const items = await Item.find();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getItemById(req: Request, res: Response) {
        try {
            const item = await Item.findById(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteItem(req: Request, res: Response) {
        try {
            const item = await Item.findByIdAndDelete(req.params.id);
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new ItemController();