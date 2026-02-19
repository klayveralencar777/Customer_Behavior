import express from 'express'
import { UserController } from '../controller/UserController.js'
const router = express.Router();
const userController = new UserController();
router.get('', userController.findAll.bind(userController));
router.get('/:id', userController.findUserById.bind(userController));
router.get('/email/:email', userController.findUserByEmail.bind(userController));
router.post('', userController.createUser.bind(userController));



export default router;

