import express from 'express'
import { CustomerController } from '../controller/CustomerController.js'
import { authMiddleware } from '../middleware/AuthMiddleware.js';
const router = express.Router();
const customerController = new CustomerController();
router.use(authMiddleware);
router.get('/find', customerController.findCustomers.bind(customerController));
router.get('/find/:id', customerController.findCustomerById.bind(customerController));
router.get('/find/email/:email', customerController.findCustomerByEmail.bind(customerController));
router.post('/create', customerController.createCustomer.bind(customerController));
router.put('/update/:id', customerController.updateCustomer.bind(customerController));
router.delete('/delete/:id', customerController.deleteCustomer.bind(customerController));




export default router;

