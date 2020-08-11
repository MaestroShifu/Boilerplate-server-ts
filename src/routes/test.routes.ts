import express from 'express';
import { getTest } from '../controllers/test.controller';

export const addRoutesTest = (app: express.Application) => {
    app.get('/test', getTest);
}