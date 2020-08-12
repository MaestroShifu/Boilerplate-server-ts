import supertest from 'supertest';
import { createDb } from '../lib/db';
import setupApp, { WORKED } from '../server';

describe('Setup app server', () => {
    test('Create connection db', async() => {
        const db = await createDb();        
        expect(db).toBeDefined();
        await db.close();
    });

    test('Create server', async() => {
        const app = setupApp(); 
        supertest(app).get('/').expect(200).end((err, res) => {
            expect(err).toBeNull();
            expect(res.text).toEqual(WORKED);
        });
    });
});