import App from './server';
import config from './config';
import { createDb } from './lib/db';
import { Connection } from 'typeorm';
import { logger } from './lib/logger';

const startServer = async () => {
    await connectDb();
    App().listen(config.PORT, () => {
        logger.info(`App is running at port: ${config.PORT}`);
    });
}

const connectDb = async (): Promise<Connection> => {
    let db: Connection;

    try {
        db = await createDb();
        logger.info(`DB connect: ${db ? config.DB_CONNECTION : ''}`);
    } catch (error) {
        logger.error(`DB error: ${error.message}`);
        throw new Error(error.message);
    }

    return db;
}

startServer();