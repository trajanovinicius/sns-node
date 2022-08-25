import { Router } from 'express';
import { SnsController } from './controllers/sns-controller'

const snsController = new SnsController()

const routes = Router();


routes.post('/sendMessage', snsController.execute);

module.exports = routes;

