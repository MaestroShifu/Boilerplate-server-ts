import { Router } from "express";
import profileController from './profile.router';

class IndexRouter {
    router: Router;

    constructor() {
        this.router = Router();
        
        this.Initialize();
    }

    Initialize(){
        this.router.use('/api',profileController.router)
    }
}

const indexRouter = new IndexRouter();
export default indexRouter.router;