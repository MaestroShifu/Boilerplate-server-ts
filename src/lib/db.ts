import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import configdb = require('../configdb');

export const createDb = (): Promise<Connection> => {
    return createConnection(configdb as ConnectionOptions);
}