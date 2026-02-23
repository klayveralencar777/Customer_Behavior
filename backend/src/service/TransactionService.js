import { ProductMovementRepository } from "../repository/ProductMovementRepository.js";
import { TransactionRepository } from "../repository/TransactionRepository.js";
import {  CustomerService } from './customer.service.js'
import { prisma } from "../database/prisma.js";
import { BusinessRuleError, EntityNotFound } from "../exceptions/Exceptions.js";
import { ProductService } from "./product.service.js";

export class TransactionService {
    constructor() {
        this.transactionRepository = new TransactionRepository(prisma);
        this.movementRepository = new ProductMovementRepository(prisma);
        this.customerService = new CustomerService();
        this.productService = new ProductService();
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
         this.checkTypeTransaction(type, customerId);

        if(!items || items.length === 0) {
            throw new BusinessRuleError(`É necessário informar pelo menos um item.`);
        } 
        
        return prisma.$transaction(async (tx) => {
            
            const transactionRepository = new TransactionRepository(tx);
            const movementRepository = new ProductMovementRepository(tx);

            if(type === "VENDA" ) {
                await this.customerService.findCustomerById(customerId, userId);
            } 
   
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

    checkTypeTransaction(type, customerId) {

        if(type === "VENDA" &&  !customerId) {
            throw new BusinessRuleError(`Para venda é necessário o cliente.`);
        }

        if(type === "COMPRA" && customerId) {
            throw new BusinessRuleError(`Compras não devem possuir clientes.`);

        } 
    }

   
}