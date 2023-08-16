import boom from "@hapi/boom";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class StudentService {
    async find() {
        return await prisma.student.findMany();
    }

    async findOne(id) {
        const student = await prisma.student.findUnique({ where: { id } });
        if (!student) {
            throw boom.notFound("Student not found");
        }
        return student;
    }

    async findByDiner() {
        const diners = await prisma.student.findMany({
            where: { diner: true }
        })

        return diners
    }

    async create(data) {
        return await prisma.student.create({ data });
    }

    async update(id, change) {
        const student = await prisma.student.findUnique({ where: { id } });
        if (!student) {
            throw boom.notFound("Student not found");
        }
        return await prisma.student.update({ where: { id }, data: change });
    }

    async delete(id) {
        const student = await prisma.student.findUnique({ where: { id } });
        if (!student) {
            throw boom.notFound("Student not found");
        }
        return await prisma.student.delete({ where: { id } });
    }
}
