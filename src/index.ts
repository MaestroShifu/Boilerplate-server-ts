import App from './server';
import Config from './config';
import { logger } from './Lib/logger';

const startServer = async () => {
    const app = await App();
    
    app.listen(Config.PORT, () => {
        logger.info(`App is running at port: ${Config.PORT}`);
    });
}

startServer();