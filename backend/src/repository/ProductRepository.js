import {PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export class ProductRepository {
    constructor(){}

    async find(userId) {
        return await prisma.product.findMany({ 
            where: { userId },
            orderBy: { createdAt :"desc"}
      });
    }

    async findById(id, userId) {
        return await prisma.product.findUnique({
            where: {
                id_userId: { id, userId }
            }
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
             where: {
                id_userId : {id, userId}
                
             },
             data
        });
    }

    async delete(id, userId) {
        return await prisma.product.delete({
            where: {
                id_userId: { id, userId}
            }
        })
    }

   
}