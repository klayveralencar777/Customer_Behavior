import { NextFunction, Request, Response } from "express";
import { CustomerService } from "../service/customer.service.js";
import { CustomerCreateDTO, CustomerUpdateDTO } from "../dto/customer.dto.js";


interface CustomerParams {
    id: string,
    email: string,
}


export class CustomerController {
    constructor( private customerService = new CustomerService()) { }

    async findCustomers(req: Request, res: Response, next: NextFunction) {
        try {
            const customers = await this.customerService.findCustomers(req.user.id);
            return res.status(200).json(customers);
            
        } catch (error: any) {
            next(error);
            
        }
    }

    async findCustomerById(req: Request<CustomerParams>, res: Response, next: NextFunction) {
        try {
            const customer = await this.customerService.findCustomerById(req.params.id, req.user.id);
            return res.status(200).json(customer);
        } catch (error: any) {
            next(error);
            
        }
    }

    async findCustomerByEmail(req: Request<CustomerParams>, res: Response, next: NextFunction) {
        try {
            const customer = await this.customerService.findCustomerByEmail(req.params.email, req.user.id);
            return res.status(200).json(customer);
        } catch (error: any) {
            next(error);
            
        }
    }

    async createCustomer(req: Request, res: Response, next: NextFunction) {
        try {
                const dto : CustomerCreateDTO = {
                    name: req.body.name,
                    email: req.body.email,
                    phone: req.body.phone,
                }
                await this.customerService.createCustomer(dto, req.user.id);
                return res.status(201).json({message: `Cliente criado com sucesso!`});
            
        } catch (error: any) {
            next(error);
        }
           
    }

    async updateCustomer(req: Request<CustomerParams>, res: Response, next: NextFunction) {
        try {
            const dto: CustomerUpdateDTO = {
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
            }
           const customer =  await this.customerService.updateCustomer(req.params.id, dto, req.user.id);
            return res.status(200).json(customer);
            
        } catch (error: any) {
            next(error);
            
        }

    } 

    async deleteCustomer(req: Request<CustomerParams>, res: Response, next: NextFunction) {
        try {
            await this.customerService.deleteCustomer(req.params.id, req.user.id);
            return res.status(204).send();
            
        } catch (error: any) {
            next(error);
            
        }
    }

}