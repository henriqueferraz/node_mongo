import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { findUserById } from '../services/auth';
import { RequestHandler } from 'express';
import passport from 'passport';
import { User } from '../types/user';

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY
}


export const jwtStrategy = new JWTStrategy(options, async (payload, done) => {
    console.log(payload);
    const { id } = payload;

    const user = await findUserById(id);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false);
    }
});

export const jwtStrategyAuth: RequestHandler = (req, res, next) => {

    const authReques = passport.authenticate('jwt',
        (err: any, user: User | false) => {
            if (user) {
                req.user = user;
                next();
            }
            return res.status(401).json({ message: 'Não Autorizado' });
        })
    authReques(req, res, next);
}