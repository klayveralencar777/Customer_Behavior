import { User } from "@prisma/client";
import { EmailAlreadyExists, EntityNotFound } from "../exceptions/Exceptions.js";
import { UserRepository } from "../repository/user.repository.js";
import bcrypt from 'bcrypt';
import { UserCreateDTO, UserUpdateDTO } from "../dto/user.dto.js";


export class UserService {
    constructor(private userRepository = new UserRepository()) { }   

    async findUser() : Promise<Omit<User, "password">[]> {
        return await this.userRepository.find();
    }  

    async findUserById(id: string) : Promise<Omit<User, "password"> | null>{
        const user = await this.userRepository.findById(id);
        if(!user) throw new EntityNotFound(`Usuário não encontrado com o id ${id}`);
        return user;
    }
    
    async findUserByEmail(email: string): Promise<Omit<User, "password"> | null>{
        const user = await this.userRepository.findByEmail(email);
        if(!user) throw new EntityNotFound(`Usuário não encontrado com o email ${email}`);
        return user;
        
    }

    async createUser(dto: UserCreateDTO) {
        const userExists = await this.userRepository.findByEmail(dto.email);
        if(userExists) throw new EmailAlreadyExists(`Já existe um usuário com o email ${dto.email}`);
        const cryptPassword = await this.encryptPassword(dto.password);
        const user = await this.userRepository.create({
            name: dto.name,
            email: dto.email,
            password: cryptPassword,
        });

        return user;
         
    }
    
    async updateUser(id: string, dto: UserUpdateDTO) : Promise<Omit<User, "password"> | null> {
        await this.findUserById(id);
        
        if(dto.email) {
            const user = await this.userRepository.findByEmail(dto.email);
            if(user && user.id !== id) {
                throw new EmailAlreadyExists(`Já existe um usuário com o email ${dto.email}`);
            }
        }

        if(dto.password) {
            const cryptPassword = await this.encryptPassword(dto.password);
            return await this.userRepository.update(id, {
                name: dto.name,
                email: dto.email,
                password: cryptPassword,
            });
        
        }
        
        return await this.userRepository.update(id, dto);
    }


    async deleteUser(id: string) : Promise<void> {
        await this.findUserById(id);
        await this.userRepository.remove(id);    
    }


    private async encryptPassword(password: string){
        return await bcrypt.hash(password, 10);
    }

    
}

