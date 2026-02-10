import { UserService } from "../service/UserService.js";

export class UserController {
    constructor() { this.userService = new UserService(); }

    async findAll(req, res) {
        try {
            const users = await this.userService.findUser();
            return res.status(200).json(users);
            
        } catch (error) {
            return res.status(400).json({error: error.message});
            
        }
    }
    async findUserByEmail(req, res, next) {
        try {
            const user = await this.userService.findUserByEmail(req.params.email);
            return res.status(200).json(user);
            
        } catch (error) {
            next(error);
            
        }
    }
    async createUser(req, res, next) {
        try {
            await this.userService.createUser(req.body);
            return res.status(201).json(`Conta criada com sucesso!`);
            
        } catch (error) {
            next(error);
        }
    }
}