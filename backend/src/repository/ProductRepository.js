import { prisma } from "../database/prisma.js";
export class ProductRepository {
    constructor(){}

    async find(userId) {
        return await prisma.product.findMany({ 
            where: { userId },
            orderBy: { createdAt :"desc"}
      });
    }

    async findById(id, userId) {
        return await prisma.product.findFirst({
            where: { id, userId }
        });
    }

    async create(data, userId) {
        return await prisma.product.create({
            data: {
                ...data,
                userId
            }
        });
    }

    async update(id, userId, data) {
        return await prisma.product.update({
             where: { id, userId },
             data
        });
    }

    async delete(id, userId) {
        return await prisma.product.delete({
            where: { id, userId }
        });
    }

   
}