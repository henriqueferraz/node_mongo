import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { findUserByToken } from '../services/auth';
import { RequestHandler } from 'express';
import passport from 'passport';
import { User } from '../types/user';

export const bearerStrategy = new BearerStrategy(async (token, done) => {

    const user = await findUserByToken(token);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
});

export const bearerStrategyMiddleware: RequestHandler = (req, res, next) => {
    const authRequest = passport.authenticate('bearer',
        (error: any, user: User | false) => {
            if (user) {
                req.user = user;
                return next();
            }
            return res.status(401).json({ message: 'Não autorizado' });
        });
    authRequest(req, res, next);
};