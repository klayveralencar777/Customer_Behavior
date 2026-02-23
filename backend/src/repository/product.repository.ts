import { Prisma, Product } from "@prisma/client";
import { prisma } from "../database/prisma.js";

export class ProductRepository {
    constructor(){}

   async find(userId: string) : Promise<Product[]> {
        return await prisma.product.findMany({
            where: { userId},         
        });
   }

    async findById(id: string, userId: string) : Promise<Product>{
        return await prisma.product.findUnique({
             where: {id, userId},
        });
    } 

   async create(data: Prisma.ProductCreateInput) : Promise<Product> {
        return await prisma.product.create({ data });
   }

    async update(id: string, data: Prisma.ProductUpdateInput): Promise<Product> {
        return await prisma.product.update({
            where: {id},
            data
        });

    }

    async remove(id: string, userId: string) : Promise<void> {
        await prisma.product.deleteMany({
            where: { id, userId}
        });
    }

   
}