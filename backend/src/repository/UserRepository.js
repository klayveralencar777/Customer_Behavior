import { prisma } from "../database/prisma.js";
export class UserRepository {
    constructor() {}

    async find() {
        return await prisma.user.findMany();
    }

    async findById(id) {
        return await prisma.user.findUnique({ where: { id }});
    }


    async findByEmail(email) {
        return await prisma.user.findUnique({ where: { email }});
    }

    async create(data) {
        return await prisma.user.create({ data });
    }




} 
