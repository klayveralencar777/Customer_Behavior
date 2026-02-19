import express from 'express'
import { ProductMovementController } from '../controller/ProductMovementController.js'
import { authMiddleware } from '../middleware/AuthMiddleware.js';
const router = express.Router();
const productMovController = new ProductMovementController();
router.use(authMiddleware);
router.get('', productMovController.findAllMovements.bind(productMovController));
router.get('/:id', productMovController.findMovementByProduct.bind(productMovController));



export default router;

