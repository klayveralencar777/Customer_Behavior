import { ProductMovementRepository } from "../repository/ProductMovementRepository.js";
import { TransactionRepository } from "../repository/TransactionRepository.js";
import { prisma } from "../database/prisma.js";
import { EntityNotFound } from "../exceptions/Exceptions.js";

export class TransactionService {
    constructor() {
        this.transactionRepository = new TransactionRepository(prisma);
        this.movementRepository = new ProductMovementRepository(prisma);
    }

    async findTransactions(userId) {
        return await this.transactionRepository.find(userId);
    }

    async findTransactionById(id, userId) {
        const transaction = await this.transactionRepository.findById(id, userId);
        if(!transaction) {
            throw new EntityNotFound(`Transação com o id ${id} não encontrada!`);
        }
        return transaction;
    }

    async createTransaction({ userId, customerId, type, items}) {
        return prisma.$transaction(async (tx) => {
            
            const transactionRepository = new TransactionRepository(tx);
            const movementRepository = new ProductMovementRepository(tx);

            const totalAmount = items.reduce((sum, item) =>
                sum + item.quantity * item.unitPrice, 0
            );

            const transaction = await transactionRepository.create({
                type,
                userId,
                customerId,
                status: "CONCLUIDA",
                totalAmount: totalAmount,        
            });

           const movements = items.map(i => ({
                productId: i.productId,
                quantity: i.quantity,
                unitPrice : i.unitPrice,
                type: type === "VENDA" ? "SAIDA" : "ENTRADA",
                userId,
                transactionId: transaction.id,
           }));

           await movementRepository.createMany(movements);

           return transaction;        

        });
    }

   

}