import express from 'express';
import { json, urlencoded } from 'body-parser';
import { connectDatabase } from './database/config';
import mailRouter from './api/routes/mail';
import itemRouter from './api/routes/items';
import authRouter from './api/routes/auth';
import { authenticate } from './api/middleware/auth';

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use('/api/auth', authRouter);
app.use('/api/*', authenticate); // Apply auth middleware to all API routes except auth

app.use('/api/mail', mailRouter);
app.use('/api/items', itemRouter);

// Database connection
connectDatabase()
    .then(() => console.log('Database ready'))
    .catch(err => console.error('Database setup error:', err));

export default app;
