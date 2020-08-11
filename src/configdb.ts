import config, { INodeEnv } from "./config";
import { indexdb } from "./database/indexdb";

const dbType: string = 'postgres';

export = {
    type: dbType,
    url: config.DB_CONNECTION, 
    synchronize: config.NODE_ENV === INodeEnv.dev ? true : false,
    logging: config.NODE_ENV === INodeEnv.dev ? true : false,
    entities: indexdb.entities,
    subscribers: indexdb.subscribers,
    migrations: indexdb.migrations,
    cli: {
        entitiesDir: 'src/database/entities',
        migrationsDir: 'src/database/migrations',
        subscribersDir: 'src/database/subscribers'
    }
};