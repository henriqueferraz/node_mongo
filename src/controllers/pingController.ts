import { RequestHandler } from "express";

export const getPingController: RequestHandler = (req, res) => {
    res.json({ pong: true });
}