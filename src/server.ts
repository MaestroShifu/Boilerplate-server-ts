import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import config from './config';
import { createDb } from './lib/db';
import { logger } from './lib/logger';
import { addRoutesTest } from './routes/test.routes';

const setupApp = async (): Promise<express.Express> => {
    const app = express();

    try {
        const db = await createDb();
        logger.info(`DB connect: ${db ? config.DB_CONNECTION : ''}`);
    } catch (error) {
        logger.error(`DB error: ${error.message}`);
        throw new Error(error.message);
    }

    app.use(helmet());
    app.use(cors());
    app.use(compression());

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    addRoutesTest(app);

    return app;
}

export default setupApp;