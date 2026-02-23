import { prisma } from "../database/prisma.js";
import { Prisma, User } from "@prisma/client";
export class UserRepository {
    constructor() {}

   async find(): Promise<Omit<User, "password">[]> {
        return await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,  
                createdAt: true,
                updatedAt: true       
            }
        });
   }

    async findById(id: string): Promise<Omit<User, "password"> | null >{
        return await prisma.user.findUnique({ 
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true
            }
        
        });

    }
    
    async findByEmail(email: string) : Promise<Omit<User, "password"> | null> {
        return await prisma.user.findFirst({ 
            where: { email},
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true
            }
        
        });
        
    }

    async findByEmailWithPassword(email: string) : Promise<User | null>{
        return await prisma.user.findFirst({ where: { email }});
    }

    

    async create(data: Prisma.UserCreateInput){
        return await prisma.user.create({ data });
    }

    async update(id: string, data: Prisma.UserUpdateInput) : Promise<Omit<User, "password"> | null> {
        return await prisma.user.update({
            where: { id },
            data,
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true
            }
        });
    }

    async remove(id: string): Promise<void>{
        await prisma.user.delete({ where: { id }});
    }






    

} 

