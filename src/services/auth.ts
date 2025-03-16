import { User } from "../types/user";
import jwt from 'jsonwebtoken';

export const findUserByEmailAndPassword = async (email: string, password: string) => {
    if (email === 'teste@teste.com.br' && password === '1234') {
        const user: User = {
            id: '1',
            name: 'Teste'
        }
        return user;
    }
    return null;
};

export const createUserToken = (user: User) => {
    return '1234';
}

export const createUserJWT = (user: User) => {
    const payload = {
        id: user.id,
    }
    return jwt.sign(payload, process.env.JWT_KEY as string, {
        expiresIn: '1 minute'
    });
}

export const findUserByToken = async (token: string) => {
    if (token === '1234') {
        const user: User = {
            id: '1',
            name: 'Teste'
        }
        return user;
    }
    return null;
};

export const findUserById = async (id: string) => {
    if (id === '1') {
        const user: User = {
            id: '1',
            name: 'Teste'
        }
        return user;
    }
    return null;
};