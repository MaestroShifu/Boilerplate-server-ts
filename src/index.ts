import App from './server';
import Config from './config';
import { logger } from './Lib/logger';
import server from './server';

const startServer = async () => {
    await server.Start();

    server.app.listen(Config.PORT, () => {
        logger.info(`App is running at port: ${Config.PORT}`);
    });
}

startServer();