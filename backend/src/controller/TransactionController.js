import { TransactionService } from "../service/TransactionService.js";

export class TransactionController {
    constructor() {  this.transactionService = new TransactionService(); }

    async findTransaction(req, res) {
        try {
            const transactions = await this.transactionService.findTransactions(req.user.id);
            return res.status(200).json(transactions);
            
            
        } catch (error) {
            return res.status(400).json({error: error.message});
            
        }
    }

    async findTransactionById(req, res, next) {
        try {
            const transaction = await this.transactionService.findTransactionById(req.params.id, req.user.id);
            return res.status(200).json(transaction);
            
        } catch (error) {
            next(error);
        }

    }
    

    async createTransaction(req, res) {
        const{ customerId, type, items} = req.body
        const  userId  = req.user.id

        try {
            const transaction = await this.transactionService.createTransaction({
                userId,
                customerId,
                type,
                items
            })
            return res.status(201).json({message: `Transação criada com sucesso!`, transaction});
            
        } catch (error) {
            return res.status(400).json({error: error.message});
            
        }
    }

    
}