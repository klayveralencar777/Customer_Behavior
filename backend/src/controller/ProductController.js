import { ProductService } from "../service/ProductService.js";

export class ProductController {
    constructor() { this.productService = new ProductService(); }

    async findProducts(req, res)  {
        try {
            const products = await this.productService.findProducts(req.user.id);
            return res.status(200).json(products);
            
        } catch (error) {
            return res.status(401).json({error: error.message});
            
        }
    }
    async findProductById(req, res, next) {
            try {
                const product = await this.productService.findProductById(req.params.id, req.user.id);
                return res.status(200).json(product);
                
            } catch (error) {
                next(error);
                
            }
    }

    async createProduct(req, res, next) {
            try {
                await this.productService.createProduct(req.body, req.user.id);
                return res.status(201).json({message: `Produto criado com sucesso!`});
                
            } catch (error) {
                next(error);
                
            }
    }

    async updateProduct(req, res, next) {
            try {
                const product = await this.productService.updateProduct(req.params.id, req.user.id, req.body);
                return res.status(200).json(`Produto atualizado com sucesso!`, product);
                
            } catch (error) {
                next(error);
                
            }
    }
    
    async deleteProduct(req, res, next) {
        try {
            await this.productService.deleteProduct(req.params.id, req.user.id);
            return res.status(204).json(`Produto removido com sucesso!`);
            

        } catch (error) {
            next(error);
            
        }
    }


}