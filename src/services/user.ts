import { Prisma } from "@prisma/client";
import { prisma } from "../libs/prisma";

export const createUser = async (data: Prisma.UserCreateInput) => {

    try {
        return await prisma.user.create({ data });
    } catch (error) {
        return false;
    }

};

export const createUsers = async (users: Prisma.UserCreateInput[]) => {

    return await prisma.user.createMany({
        data: users
    });
}

export const AllUsers = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            status: true
        }
    });
};

export const UserByEmail = async (email: string) => {
    return await prisma.user.findUnique({
        where: {
            email
        }
    });
}