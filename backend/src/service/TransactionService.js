import { ProductMovementRepository } from "../repository/ProductMovementRepository.js";
import { TransactionRepository } from "../repository/TransactionRepository.js";
import {  CustomerService } from '../service/CustomerService.js'
import { prisma } from "../database/prisma.js";
import { BusinessRuleError, EntityNotFound } from "../exceptions/Exceptions.js";

export class TransactionService {
    constructor() {
        this.transactionRepository = new TransactionRepository(prisma);
        this.movementRepository = new ProductMovementRepository(prisma);
        this.customerService = new CustomerService();
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

        if(!items || items.length === 0) throw new BusinessRuleError(`É necessário informar pelo menos um item`);

        if(type === "VENDA" &&  !customerId) throw new BusinessRuleError(`Para venda é necessário o cliente`);
        
        return prisma.$transaction(async (tx) => {
            
            const transactionRepository = new TransactionRepository(tx);
            const movementRepository = new ProductMovementRepository(tx);

            if(type === "VENDA" ) await this.customerService.findCustomerById(customerId, userId);
                
            const movementType = type === "VENDA" ? "SAIDA" : "ENTRADA";

            const totalAmount = items.reduce((sum, item) =>
                sum + item.quantity * item.unitPrice, 0
            );

            const transaction = await transactionRepository.create({
                type: type,
                userId,
                customerId,
                status: "CONCLUIDA",
                totalAmount: totalAmount,        
            });

           const movements = items.map(i => ({
                productId: i.productId,
                quantity: i.quantity,
                unitPrice : i.unitPrice,
                type: movementType,
                userId,
                transactionId: transaction.id,
           }));

           await movementRepository.createMany(movements);

           return transaction;        

        });
    }


}