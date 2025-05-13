import { Router } from 'express';
import AuthController from '../controllers/authController';
import { authenticate } from '../middleware/auth';

const router = Router();
const authController = new AuthController();

// Route for user login
router.post('/login', authController.login);

// Route for user registration
router.post('/register', authController.register);

// Route for getting user profile (authenticated)
router.get('/profile', authenticate, authController.getProfile);

export default router;