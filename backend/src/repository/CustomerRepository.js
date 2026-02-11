import { prisma } from "../database/prisma.js";
export class CustomerRepository {
    constructor(){}

    async find(userId) {
        return await prisma.customer.findMany({
             where: { userId },
             orderBy: { createdAt : "desc"}
        });
    }

    async findById(id, userId) {
        return await prisma.customer.findUnique({
             where: {
                  id_userId: { id, userId }        
             }
        });
    }

    async findByEmail(email, userId) {
        return await prisma.customer.findUnique({
             where: {
                 email_userId: { email, userId}
             }
        });
    }



    async create(data, userId) {
        return await prisma.customer.create({
            data: {
                ...data,
                userId
            }
        })
    }

    async update(id, userId, data) {
        return await prisma.customer.update({
             where: {
                    id_userId: { id, userId }
             },
             data
        })
    }

    async delete(id, userId) {
        return await prisma.customer.delete({
            where: {
                id_userId: { id, userId }
            }
        })
    }



    


}


