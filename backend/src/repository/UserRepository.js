import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export class UserRepository {
    constructor() {}

    async find() {
        return await prisma.user.findMany();
    }


    async findByEmail(email) {
        return await prisma.user.findUnique({ where: { email }});
    }

    async create(data) {
        return await prisma.user.create({ data });
    }




} 
