import express from 'express'
import { UserController } from '../controller/UserController.js'
const router = express.Router();
const userController = new UserController();
router.get('/find', userController.findAll.bind(userController));
router.get('/find/:id', userController.findUserById.bind(userController));
router.get('/find/email/:email', userController.findUserByEmail.bind(userController));
router.post('/create', userController.createUser.bind(userController));



export default router;

