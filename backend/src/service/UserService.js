import { EmailAlreadyExists, EntityNotFound } from "../exceptions/Exceptions.js";
import { UserRepository } from "../repository/UserRepository.js";
import bcrypt from 'bcrypt';

export class UserService {
    constructor() { this.userRepository = new UserRepository(); }   

    async findUser() {
        return await this.userRepository.find();
    }


    async findUserById(id) {
        const user = await this.userRepository.findById(id);
        if(!user) throw new EntityNotFound(`Usuário não encontrado com o id ${id}`);
        return user;
    }
    
    async findUserByEmail(email) {
        const user = await this.userRepository.findByEmail(email);
        if(!user) throw new EntityNotFound(`Usuário não encontrado com o email ${email}`);
        return user;
        
    }

    async createUser({name, email, password}) {
        const userExists = await this.userRepository.findByEmail(email);
        if(userExists) throw new EmailAlreadyExists(`Já existe um usuário com o email ${email}`);
        const cryptPassword = await bcrypt.hash(password, 10);
        const user = await this.userRepository.create({
            name,
            email,
            password: cryptPassword,
        });
        const{password: _, ...userNoPassword} = user;
        return userNoPassword;

        
    }

    
}

