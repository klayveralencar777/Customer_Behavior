import express from 'express'
import { TransactionController } from '../controller/TransactionController.js'
import { authMiddleware } from '../middleware/AuthMiddleware.js';
const router = express.Router();
const transactionController = new TransactionController();
router.use(authMiddleware);
router.get('/find', transactionController.findTransaction.bind(transactionController));
router.get('/find/:id', transactionController.findTransactionById.bind(transactionController));

router.post('/create', transactionController.createTransaction.bind(transactionController));





export default router;

