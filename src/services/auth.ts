import { User } from "../types/user";

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