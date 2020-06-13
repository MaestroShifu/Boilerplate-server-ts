import * as dotenv from 'dotenv';
import * as path from 'path';

enum INodeEnv { 
    'development' = 'development',
    'production' = 'production',
};

dotenv.config({
    path: path.join(path.dirname(__filename), '../.env')
});

const HOSTNAME = process.env.NODE_ENV === INodeEnv.production ? `URL ${INodeEnv.production}` : process.env.HOSTNAME;

export default {
    PORT: process.env.PORT,
    HOSTNAME,
}