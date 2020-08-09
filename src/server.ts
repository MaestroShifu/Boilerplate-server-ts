import Express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import 'reflect-metadata';

const setupApp = (): Express.Express => {
    const app = Express();

    app.use(helmet());
    app.use(cors());
    app.use(compression());

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.get("/", (req: Express.Request, res: Express.Response) => {
        res.send("Hello World")
    })

    return app;
}

export default setupApp;