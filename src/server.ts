import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import config, { INodeEnv } from './config';
import 'reflect-metadata';
import { createDb } from './Lib/db';
import { logger } from './Lib/logger';
import indexRouter from './Routes';

class Server {
    
    /** Base app server */
    app : express.Application;

    constructor() {
        this.app = express();
        
        this.InitializeConfigurations();
    }

    /** Init all server required config */
    async InitializeConfigurations(){
        // Setup middlewares
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(compression());
    
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());

        // Add routes
        this.RouterManager()
    }

    /** Add main router to app */
    RouterManager(){
        this.app.use(indexRouter);
    }

    async Start(){
        return new Promise(async (resolve, reject) => {
            // Database init
            const db = await createDb();
    
            try {
                const db = await createDb();
                logger.info(`DB connect: ${db ? `db of: ${INodeEnv.prod}` : '???'}`);
            } catch (error) {
                logger.error(`DB error: ${error.message}`);
                throw new Error(error.message);
            }
            resolve();
        });
    }
}

const server = new Server();
export default server;