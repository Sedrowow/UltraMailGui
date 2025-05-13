import express from 'express';
import { json, urlencoded } from 'body-parser';
import path from 'path';
import { connectDatabase } from './database/config';
import mailRouter from './api/routes/mail';
import itemRouter from './api/routes/items';
import authRouter from './api/routes/auth';
import { authenticate } from './api/middleware/auth';

const app = express();

// View engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, '../public')));

app.use(json());
app.use(urlencoded({ extended: true }));

// Web routes (before API routes)
app.get('/', (req, res) => res.render('index'));
app.get('/login', (req, res) => res.render('auth/login'));
app.get('/register', (req, res) => res.render('auth/register'));
app.get('/mails', (req, res) => res.render('mail/list'));

app.use('/api/auth', authRouter);
app.use('/api/*', authenticate); // Apply auth middleware to all API routes except auth

app.use('/api/mail', mailRouter);
app.use('/api/items', itemRouter);

// Database connection
connectDatabase()
    .then(() => console.log('Database ready'))
    .catch((err: Error) => console.error('Database setup error:', err));

export default app;
