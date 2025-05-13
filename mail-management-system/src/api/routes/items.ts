import { Router } from 'express';
import ItemController from '../controllers/itemController';
import { authenticate } from '../middleware/auth';
import { adminCheck } from '../middleware/adminCheck';

const router = Router();
const itemController = new ItemController();

// Route to get items from a specific mail
router.get('/:mailId', authenticate, itemController.getItemsByMail);

// Route to add an item to a mail
router.post('/:mailId', authenticate, adminCheck, itemController.addItemToMail);

// Route to delete an item from a mail
router.delete('/:mailId/:itemId', authenticate, adminCheck, itemController.deleteItemFromMail);

export default router;