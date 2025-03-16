import { RequestHandler } from "express";
import { AllUsers, createUser, createUsers, UserByEmail } from "../services/user";

export const postCreateUser: RequestHandler = async (req, res) => {
    const user = await createUser({
        name: req.body.name,
        email: req.body.email,
    });
    if (user) {
        res.status(201).json({ user });
    } else {
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
};

export const getCreateUser: RequestHandler = async (req, res) => {
    const users = await createUsers(req.body.users);
    if (users) {
        res.status(201).json({ users });
    } else {
        res.status(400).json({ error: 'Erro ao criar usuários' });
    }
};

export const getAllUser: RequestHandler = async (req, res) => {
    const users = await AllUsers();
    res.json({ users });
};

export const getUserByEmail: RequestHandler = async (req, res) => {

    const user = await UserByEmail(req.body.email);
    if (user) {
        res.json({ user });
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
};