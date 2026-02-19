import express from 'express'
import { CustomerController } from '../controller/CustomerController.js'
import { authMiddleware } from '../middleware/AuthMiddleware.js';
const router = express.Router();
const customerController = new CustomerController();
router.use(authMiddleware);
router.get('/', customerController.findCustomers.bind(customerController));
router.get('/email/:email', customerController.findCustomerByEmail.bind(customerController));
router.get('/:id', customerController.findCustomerById.bind(customerController));
router.post('', customerController.createCustomer.bind(customerController));
router.put('/:id', customerController.updateCustomer.bind(customerController));
router.delete('/:id', customerController.deleteCustomer.bind(customerController));



export default router;

