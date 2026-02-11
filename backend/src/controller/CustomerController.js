import { CustomerService } from "../service/CustomerService.js";

export class CustomerController {
    constructor() { this.customerService = new CustomerService(); }

    async findCustomers(req, res, next) {
        try {
            const customers = await this.customerService.findCustomers(req.user.id);
            return res.status(200).json(customers);
            
        } catch (error) {
            next(error);
            
        }
    }

    async findCustomerById(req, res, next) {
        try {
            const customer = await this.customerService.findCustomerById(req.params.id, req.user.id);
            return res.status(200).json(customer);
        } catch (error) {
            next(error);
            
        }
    }

    async findCustomerByEmail(req, res, next) {
        try {
            const customer = await this.customerService.findCustomerByEmail(req.params.email, req.user.id);
            return res.status(200).json(customer);
        } catch (error) {
            next(error);
            
        }
    }

    async createCustomer(req, res, next) {
        try {
                await this.customerService.createCustomer(req.body, req.user.id);
                return res.status(201).json({message: `Cliente criado com sucesso!`});
            
        } catch (error) {
            next(error);
        }
           
    }

    async updateCustomer(req, res, next) {
        try {
           const customer =  await this.customerService.updateCustomer(req.params.id, req.user.id, req.body);
            return res.status(200).json(customer);
            
        } catch (error) {
            next(error);
            
        }

    } 

    async deleteCustomer(req, res, next) {
        try {
            await this.customerService.deleteCustomer(req.params.id, req.user.id);
            return res.status(204).json({message: `Cliente removido com sucesso!`});
            
        } catch (error) {
            next(error);
            
        }
    }

}