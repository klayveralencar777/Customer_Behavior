import express from 'express'
import { TransactionController } from '../controller/TransactionController.js'
import { authMiddleware } from '../middleware/AuthMiddleware.js';
import { validate } from '../middleware/ValidateMiddleware.js';
import { createTransactionSchema } from '../validations/TransactionsSchema.js';
const router = express.Router();
const transactionController = new TransactionController();
router.use(authMiddleware);
router.get('', transactionController.findTransaction.bind(transactionController));
router.get('/:id', transactionController.findTransactionById.bind(transactionController));
router.post('', validate(createTransactionSchema) ,transactionController.createTransaction.bind(transactionController));





export default router;

