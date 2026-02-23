import { NextFunction, Request, Response } from "express";
import { UserService } from "../service/user.service.js";
import { UserCreateDTO, UserUpdateDTO } from "../dto/user.dto.js";

interface UserParams {
    id: string,
    email: string
}


export class UserController {
    constructor( private userService = new UserService()) {}

    async findAll(req: Request, res: Response) {
        try {
            const users = await this.userService.findUser();
            return res.status(200).json(users);
            
        } catch (error: any) {
            return res.status(400).json({error: error.message});
            
        }
    }
    async findUserByEmail(req: Request<UserParams>, res: Response, next: NextFunction) {
        try {
            const user = await this.userService.findUserByEmail(req.params.email);
            return res.status(200).json(user);
            
        } catch (error: any) {
            next(error);
            
        }
    }
    async findUserById(req: Request<UserParams>, res: Response, next: NextFunction) {
        try {
            const user = await this.userService.findUserById(req.params.id);
            return res.status(200).json(user);
            
        } catch (error: any) {
            next(error);
            
        }
    }
    async createUser(req: Request, res: Response, next: NextFunction) {
        try {
            const dto: UserCreateDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }
            await this.userService.createUser(dto);
            return res.status(201).json({message: `Conta criada com sucesso!`});
            
        } catch (error: any) {
            next(error);
        }
    }

    async updateUser(req: Request<UserParams>, res: Response, next: NextFunction) {
        try {
            const dto: UserUpdateDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            }
            const user = await this.userService.updateUser(req.params.id, dto);
            return res.status(200).json(user);            
        } catch (error: any) {
           next(error);
            
        }
    }
    async deleteUser(req: Request<UserParams>, res: Response, next: NextFunction) {
        try {
            await this.userService.deleteUser(req.params.id);
            return res.status(204).send();
        
        } catch (error: any) {
            next(error);
            
        }
    }
}