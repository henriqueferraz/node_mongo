import { Strategy as LocalStrategy } from 'passport-local';
import { createUserJWT, createUserToken, findUserByEmailAndPassword } from '../services/auth';
import { LocalStrategyResponse } from '../types/user';
import { RequestHandler } from 'express';
import passport from 'passport';

export const localStrategy = new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {

    const user = await findUserByEmailAndPassword(email, password);

    if (user) {

        const token = createUserJWT(user);
        const response: LocalStrategyResponse = {
            auth: { token },
            user
        }
        done(null, response);

    } else {
        return done(null, false, { message: 'Usuário ou senha inválidos' });
    }
});

export const localStrategyMiddleware: RequestHandler = (req, res, next) => {
    const authRequest = passport.authenticate('local',
        (error: any, response: LocalStrategyResponse | false) => {
            if (response) {
                req.user = response.user;
                req.authInfo = response.auth;
                return next();
            }
            return res.status(401).json({ message: 'Usuário ou senha inválidos' });
        })

    authRequest(req, res, next);
};