//import boom from "@hapi/boom";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const RATE = 0.6;

export class BookService {

    async findByCode(code) {
        return await prisma.student.findUnique({
            where: { code }
        })
    }

    async checkIfHaveBooked(user) {
        const bookedUser = await prisma.student.findUnique({
            where: {
                id: user.id,
            },
            select: {
                diner: true,
            },
        });

        return (bookedUser.diner === true);
    }

    async checkBook(user) {
        const students = await prisma.student.count();
        const diners = await prisma.student.count({
            where: {
                diner:true
            }
        })
        if (diners <= RATE*students) {
            await prisma.student.update({
                where: { id: user.id},
                data: { diner: true }
            })
            return true
        } else {
            return false
        }

    }

    async resetBook() {
        await prisma.student.updateMany({
            data: {
                diner: false
            }
        })
    }

}