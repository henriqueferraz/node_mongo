import { RequestHandler } from "express";

export const postLoginController: RequestHandler = async (req, res) => {
    res.json({
        user: req.user,
        auth: req.authInfo
    });
}