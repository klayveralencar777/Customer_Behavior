import { Customer } from "@prisma/client";
import { EmailAlreadyExists, EntityNotFound } from "../exceptions/Exceptions.js";
import { CustomerRepository } from "../repository/customer.repository.js";
import { CustomerCreateDTO, CustomerUpdateDTO } from "../dto/customer.dto.js";


export class CustomerService {
    constructor(private customerRepository = new CustomerRepository()) { }

    async findCustomers(userId: string) : Promise<Customer[]> {
        return await this.customerRepository.find(userId);
    }

    async findCustomerById(id: string, userId: string) : Promise<Customer | null>{
            const customer = await this.customerRepository.findById(id, userId);
            if(!customer) throw new EntityNotFound(`Cliente não encontrado com o id ${id}`);
            return customer;
    }

    async findCustomerByEmail(email: string, userId: string) : Promise<Customer | null> {
        const customer =  await this.customerRepository.findByEmail(email, userId);
        if(!customer) throw new EntityNotFound(`Cliente não encontrado com o email ${email}`);
        return customer;
        
    }

    async createCustomer(dto: CustomerCreateDTO, userId: string) : Promise<Customer> {
        await this.checkCustomerEmail(dto.email, userId);
        return await this.customerRepository.create({
            name: dto.name,
            email: dto.email,
            phone: dto.phone,
            user: {
                connect: { id: userId},
            }
        });   

    }
    async updateCustomer(id: string, dto: CustomerUpdateDTO, userId: string) : Promise<Customer>{
        await this.findCustomerById(id, userId);
        if(dto.email) {
            const customer = await this.customerRepository.findByEmail(dto.email, userId);
            if(customer && customer.id !== id) {
                throw new EmailAlreadyExists(`Já existe um usuário com o email ${dto.email}`);
            }
            return await this.customerRepository.update(id, {
                name: dto.name,
                email: dto.email,
                phone: dto.phone,
                user: {
                    connect: { id: userId}
                }
            });
        }

        return await this.customerRepository.update(id, {
            ...dto,
            user: {
                connect: { id: userId}
            }
        }); 

    }
    
    async deleteCustomer(id: string, userId: string) : Promise<void>  {
        await this.findCustomerById(id, userId);
        await this.customerRepository.remove(id, userId);
    }

    private async checkCustomerEmail(email: string, userId: string) {
        const customerDb = await this.customerRepository.findByEmail(email, userId);
        if(customerDb) {
            throw new EmailAlreadyExists(`Já existe um cliente com o email ${email}`);
        }

    }

}