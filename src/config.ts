import * as dotenv from 'dotenv';
import * as path from 'path';

export enum INodeEnv { 
    'dev' = 'dev',
    'prod' = 'prod',
    'test' = 'test'
};

dotenv.config({
    path: path.join(path.dirname(__filename), '../.env')
});

const HOSTNAME = process.env.NODE_ENV === INodeEnv.prod ? `URL ${INodeEnv.prod}` : process.env.HOSTNAME;

export default {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    HOSTNAME,
    DB_CONNECTION: process.env.DB_CONNECTION,
    DB_CONNECTION_FOR_TESTS: process.env.DB_CONNECTION_FOR_TESTS
}