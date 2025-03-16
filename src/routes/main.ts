import { Router } from 'express';
import { createUser, createUsers, getAllUsers, getUserByEmail } from '../services/user';

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

mainRouter.get('/users', async (req, res) => {
    const users = await getAllUsers();
    res.json({ users });
});

mainRouter.get('/user/:email', async (req, res) => {
    const user = await getUserByEmail(req.body.email);
    if (user) {
        res.json({ user });
    } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
    }
});