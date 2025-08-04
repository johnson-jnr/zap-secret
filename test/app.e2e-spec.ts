import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
    jest.setTimeout(20000);
    let app: INestApplication<App>;
    let createdSecretId: string;
    const originalSecret = 'my-secret-text';

    beforeAll(async () => {
        const moduleFixture = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();

        const createResponse = await request(app.getHttpServer())
            .post('/secret')
            .send({ secret: originalSecret, expiryHour: 1 });

        createdSecretId = createResponse.body.id;
    });

    afterAll(async () => {
        await app.close();
    });

    it('creates secret via POST /secret', async () => {
        expect(createdSecretId).toBeDefined();
        expect(typeof createdSecretId).toBe('string');
    });

    it('retrieves secret via GET /secret/:id', async () => {
        const response = await request(app.getHttpServer())
            .get(`/secret/${createdSecretId}`)
            .expect(200);

        expect(response.body).toEqual({
            success: true,
            text: originalSecret,
        });
    });
});
