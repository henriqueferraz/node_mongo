import { Router } from 'express';
import { getPingController } from '../controllers/pingController';
import { getAllUser, getCreateUser, getUserByEmail, postCreateUser } from '../controllers/userController';
import { privateRequest } from '../middlewares/auth';
import { postLoginController } from '../controllers/loginController';
import { localStrategyMiddleware } from '../libs/passport-local';

export const mainRouter = Router();

mainRouter.get('/ping', getPingController);

mainRouter.post('/user', privateRequest, postCreateUser);

mainRouter.post('/users', getCreateUser);

mainRouter.get('/users', getAllUser);

mainRouter.get('/user/:email', getUserByEmail);

mainRouter.post('/login', localStrategyMiddleware, postLoginController)