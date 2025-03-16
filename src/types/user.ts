export type User = {
    id: string;
    name: string;
}

export type LocalStrategyResponse = {
    auth: {
        token: string;
    },
    user: User;
}