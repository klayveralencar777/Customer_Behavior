import { EmailAlreadyExists, EntityNotFound } from "../exceptions/Exceptions.js";
import { CustomerRepository } from "../repository/CustomerRepository.js";

export class CustomerService {
    constructor() { this.customerRepository = new CustomerRepository(); }

    async findCustomers(userId) {
        return await this.customerRepository.find(userId);
    }

    async findCustomerById(id, userId) {
        const customer = await this.customerRepository.findById(id, userId);
        if(!customer) {
            throw new EntityNotFound(`Cliente não encontrado com o id ${id}`);
        }
        return customer;
    }

    async findCustomerByEmail(email, userId) {
        const customer = await this.customerRepository.findByEmail(email, userId);
        if(!customer) {
            throw new EntityNotFound(`Cliente com o email ${email} não encontrado!`);
        }
        return customer;

    }

    async createCustomer(customer, userId) {
        await this.checkCustomerEmail(customer.email, userId);      
        return await this.customerRepository.create(customer, userId); 
    }

    async updateCustomer(id, userId, customer) {
        const customerExists = await this.findCustomerById(id, userId);
        if(customer.email && customer.email !== customerExists.email) {
            await this.checkCustomerEmail(customer.email, userId);

        }

        return await this.customerRepository.update(id, userId, customer);

    }
    
    async deleteCustomer(id, userId)  {
        await this.findCustomerById(id, userId);
        return await this.customerRepository.delete(id, userId);
    }

    async checkCustomerEmail(email, userId) {
        const customerDb = await this.customerRepository.findByEmail(email, userId);
        if(customerDb) {
            throw new EmailAlreadyExists(`Já existe um cliente com o email ${email}`);
        }

    }

}