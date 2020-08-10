import { Console } from 'console';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import config, { INodeEnv } from '../config'

export const createDb = (): Promise<Connection> => {
    const options: ConnectionOptions = {
        type: 'postgres',
        url: config.DB_CONNECTION, 
        synchronize: config.NODE_ENV === INodeEnv.dev ? true : false,
        logging: config.NODE_ENV === INodeEnv.dev ? true : false,
        entities: [],
        subscribers: [],
        migrations: [],
        cli: {
            entitiesDir: "src/Entities",
            migrationsDir: "src/Migrations",
            subscribersDir: "src/Subscribers"
        }
    };

    return createConnection(options);
}

// directory: path.join(path.dirname(__filename), '../migrations'),