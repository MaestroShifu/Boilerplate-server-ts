import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
// import { addRoutesTest } from './routes/test.routes';

export const WORKED = 'Worked!'; 

const worked = (_req: express.Request, res: express.Response) => {
    res.send(WORKED);

}

const setupApp = (): express.Express => {
    const app = express();

    app.use(helmet());
    app.use(cors());
    app.use(compression());

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.get('/', worked);
    
    // addRoutesTest(app);

    return app;
}

export default setupApp;