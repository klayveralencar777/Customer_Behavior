
import express from 'express'
import { ProductController } from '../controller/product.controller.js'
import { authMiddleware } from '../middleware/AuthMiddleware.js';
const router = express.Router();
const productController = new ProductController();
router.use(authMiddleware);
router.get('', productController.findProducts.bind(productController));
router.get('/:id', productController.findProductById.bind(productController));
router.post('', productController.createProduct.bind(productController));
router.put('/:id', productController.updateProduct.bind(productController));
router.delete('/:id', productController.deleteProduct.bind(productController));




export default router;

