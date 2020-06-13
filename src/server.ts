import Express from "express";

const setupApp = (): Express.Express => {
    const app = Express();
    
    app.get("/", (req: Express.Request, res: Express.Response) => {
        debugger;
        res.send("Hello World")
    })

    return app;
}

export default setupApp;