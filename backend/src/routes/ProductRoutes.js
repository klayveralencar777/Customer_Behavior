import express from 'express'
import { ProductController } from '../controller/ProductController.js'
import { authMiddleware } from '../middleware/AuthMiddleware.js';
const router = express.Router();
const productController = new ProductController();
router.use(authMiddleware);
router.get('/find', productController.findProducts.bind(productController));
router.get('/find/:id', productController.findProductById.bind(productController));
router.post('/create', productController.createProduct.bind(productController));
router.put('/update/:id', productController.updateProduct.bind(productController));
router.delete('/delete/:id', productController.deleteProduct.bind(productController));




export default router;

