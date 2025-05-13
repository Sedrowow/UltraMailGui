import express from 'express';
import bodyParser from 'body-parser';
import { json, urlencoded } from 'body-parser';
import { connectDatabase } from './database/config';
import mailRoutes from './api/routes/mail';
import itemRoutes from './api/routes/items';
import authRoutes from './api/routes/auth';
import { authenticate } from './api/middleware/auth';
import { adminCheck } from './api/middleware/adminCheck';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(authenticate);

// Routes
app.use('/api/mail', mailRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/auth', authRoutes);

// Database connection
connectDatabase();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;