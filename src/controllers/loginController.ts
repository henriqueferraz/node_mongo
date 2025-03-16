import { RequestHandler } from "express";

export const postLoginController: RequestHandler = async (req, res) => {
    res.json({
        user: req.user,
        auth: req.authInfo
    });
}

export const getprivateController: RequestHandler = async (req, res) => {
    res.json({ msg: 'Acessou a rota privada' });
}

export const getprivateJwtController: RequestHandler = async (req, res) => {
    res.json({ msg: 'Acessou a rota JWT' });
}