import request from 'supertest';
import app from '../../src/app'; // Adjust the path as necessary
import { Mail } from '../../src/api/models/Mail';

describe('Mail API', () => {
    beforeAll(async () => {
        // Setup database connection and any necessary initial data
    });

    afterAll(async () => {
        // Cleanup database
    });

    it('should create a new mail', async () => {
        const response = await request(app)
            .post('/api/mail')
            .send({
                subject: 'Test Mail',
                body: 'This is a test mail.',
                recipient: 'test@example.com',
                items: []
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });

    it('should retrieve a mail by ID', async () => {
        const mail = await Mail.create({
            subject: 'Test Mail',
            body: 'This is a test mail.',
            recipient: 'test@example.com',
            items: []
        });

        const response = await request(app)
            .get(`/api/mail/${mail.id}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('subject', 'Test Mail');
    });

    it('should return 404 for non-existing mail', async () => {
        const response = await request(app)
            .get('/api/mail/999999');

        expect(response.status).toBe(404);
    });

    it('should list all mails', async () => {
        const response = await request(app)
            .get('/api/mail');

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});