import { RequestHandler } from "express";

export const privateRequest: RequestHandler = async (req, res, next) => {

    let logged = false;

    if (logged) {
        next();
    }
    else {
        res.status(401).json({ error: 'Usuário Não autorizado' });
    }
};