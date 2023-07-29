import boom from "@hapi/boom";
import bcrypt from 'bcrypt';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UserService {

    async find() {
        return await prisma.user.findMany();
    }

    async findOne(Id) {
        return await prisma.user.findUnique({
            where: { Id },
        });
    }

    async findByEmail(email) {
        return await prisma.user.findUnique({
            where: { email }
        })
    }

    async create(data) {
        const { username, email, password, role } = data;

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await prisma.user.create({
                data: {
                    username,
                    email,
                    password: hashedPassword,
                    role
                },
            });

            delete user.password;

            return user;
        } catch (error) {
            throw boom.badRequest('Error creating user', error);
        }
    }

    async update(Id, change) {
        const user = await prisma.user.findUnique({
            where: { Id }
        });
        if (!user) {
            throw boom.notFound('Student not found');
        }
        return await prisma.user.update({
            where: { Id },
            data: { change }
        })
    }

    async delete(Id) {
        const user = await prisma.user.findUnique({
            where: { Id }
        });
        if (!user) {
            throw boom.notFound('Student not found');
        }
        return await prisma.user.delete({
            where: { Id }
        });
    }
}
