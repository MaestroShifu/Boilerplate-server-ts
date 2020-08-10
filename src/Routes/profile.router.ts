import { Router,Request, Response } from "express";

class ProfileController {
    router: Router;

    constructor() {
        this.router = Router();
        
        this.Initialize();
    }

    Initialize(){
        this.router.get('/user', this.GetUser);
        this.router.post('/user', this.SaveUser);
    }

    async GetUser(req: Request, res: Response){
        return res.json("Hello World, you made a GET request");
    }

    async SaveUser(req: Request, res: Response){
        return res.json("Hello World, you made a POST request");
    }
}

const profileController = new ProfileController();
export default profileController;