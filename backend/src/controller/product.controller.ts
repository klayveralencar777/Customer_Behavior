import { NextFunction, Request, Response } from "express";
import { ProductService } from "../service/product.service.js";
import { ProductCreateDTO, ProductUpdateDTO } from "../dto/product.dto.js";

interface ProductParams {
    id: string,
}

export class ProductController {
    constructor( private productService = new ProductService()) { }

    async findProducts(req: Request, res: Response, next: NextFunction)  {
        try {
            const products = await this.productService.findProducts(req.user.id);
            return res.status(200).json(products);
            
        } catch (error: any) {
            next(error);
            
        }
    }
    async findProductById(req: Request<ProductParams>, res: Response, next: NextFunction) {
            try {
                const product = await this.productService.findProductById(req.params.id, req.user.id);
                return res.status(200).json(product);
                
            } catch (error) {
                next(error);
                
            }
    }

    async createProduct(req: Request, res: Response, next: NextFunction) {
            try {
                const dto : ProductCreateDTO = {
                    name: req.body.name,
                    description: req.body.description,

                }
                await this.productService.createProduct(dto, req.user.id);
                return res.status(201).json({message: `Produto criado com sucesso!`});
                
            } catch (error) {
                next(error); 
                
            }
    }

    async updateProduct(req: Request<ProductParams>, res: Response, next: NextFunction) {
            try {
                const dto : ProductUpdateDTO = {
                    name: req.body.name,
                    description: req.body.description,
                }
                 await this.productService.updateProduct(req.params.id, dto, req.user.id);
                return res.status(200).json(`Produto atualizado com sucesso!`);
                
            } catch (error) {
                next(error);
                
            }
    }
    
    async deleteProduct(req: Request<ProductParams>, res: Response, next: NextFunction) {
        try {
            await this.productService.deleteProduct(req.params.id, req.user.id);
            return res.status(204).send();
            

        } catch (error) {
            next(error);
            
        }
    }


}