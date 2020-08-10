import Express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import config from './config';
import 'reflect-metadata';
import { createDb } from './Lib/db';
import { logger } from './Lib/logger';

const setupApp = async (): Promise<Express.Express> => {
    const app = Express();

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
    
    app.get("/", (req: Express.Request, res: Express.Response) => {
        debugger;
        res.send("Hello World")
    })

    return app;
}

export default setupApp;