import { Customer, Prisma } from "@prisma/client";
import { prisma } from "../database/prisma.js";
export class CustomerRepository {
    constructor(){}

    async find(userId: string): Promise<Customer[]>{
        return await prisma.customer.findMany({
             where: { userId },
        });
    }

    async findById(id: string, userId: string) : Promise<Customer | null> {
        return await prisma.customer.findFirst({
            where: {id, userId}
        });
    }

    async findByEmail(email: string, userId: string) : Promise<Customer | null >{
            return await prisma.customer.findFirst({
                 where: { email, userId}
            });
        

    }

    async create(data: Prisma.CustomerCreateInput): Promise<Customer> {
        return await prisma.customer.create({ data });
        

    }

    async update(id: string, data: Prisma.CustomerUpdateInput) : Promise<Customer>{
        return await prisma.customer.update({
            where: { id },
            data
        });
    }

    async remove(id: string, userId: string) : Promise<void>{
            await prisma.customer.deleteMany({
            where: { id, userId}
        });
    } 

}


