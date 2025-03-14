import { Router } from 'express';
import { createUser, createUsers } from '../services/user';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {

    const user = await createUser({
        name: req.body.name,
        email: req.body.email,
    });
    if (user) {
        res.status(201).json({ user });
    } else {
        res.status(400).json({ error: 'Erro ao criar usuário' });
    }
});


mainRouter.post('/users', async (req, res) => {

    const users = await createUsers(req.body.users);
    if (users) {
        res.status(201).json({ users });
    } else {
        res.status(400).json({ error: 'Erro ao criar usuários' });
    }
});