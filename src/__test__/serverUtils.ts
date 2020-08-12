import express from 'express';
import config from '../config';
import supertest from 'supertest';
import configdb = require('../configdb');
import { createServer, Server } from 'http';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';

export const serverTest = () => {
    let server: Server;
    let connection: Connection;
    let app: express.Application;

    const init = async (): Promise<void> => {
        connection = await createConnection(configdb as ConnectionOptions);
        app = express();
        server = createServer(app).listen(config.PORT);
    }

    const close = async (): Promise<void> => {
        server.close();
        connection.close();
    }

    const getApp = (): supertest.SuperTest<supertest.Test> => {
        return supertest(app);
    } 

    const getConnection = (): Connection => {
        return connection;
    }

    const getServer = (): Server => {
        return server;
    } 

    return {
        init,
        close,
        getApp,
        getServer,
        getConnection,
    }
}