import App from './server';
import Config from './config';

App().listen(Config.PORT, () => {
    console.log(`App is running at port: ${Config.PORT}`);
});