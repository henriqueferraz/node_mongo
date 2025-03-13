import prismaClient from "../prisma";

export class CreateService {
    async execute() {
        console.log("Rota chamada");

        return { ok: true }
    };
}