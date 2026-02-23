import { Product } from "@prisma/client";
import { EntityNotFound } from "../exceptions/Exceptions.js";
import { ProductRepository } from "../repository/product.repository.js";
import { ProductCreateDTO, ProductUpdateDTO } from "../dto/product.dto.js";


export class ProductService {
    constructor( private productRepository = new ProductRepository()) {}

    async findProducts(userId: string) : Promise<Product[]> {
          return await this.productRepository.find(userId);
    }


    async findProductById(id: string, userId: string): Promise<Product> {
          const product = await this.productRepository.findById(id, userId);
          if(!product) throw new EntityNotFound(`Produto não econtrando com o id ${id}`);
          return product;
    }

    async createProduct(dto: ProductCreateDTO, userId: string) : Promise<Product>{
          return await this.productRepository.create({
               name: dto.name,
               description: dto.description,
               user: {
                    connect: { id: userId}
               }
          });
    }

    async updateProduct(id: string, dto: ProductUpdateDTO, userId: string): Promise<Product>{
            await this.findProductById(id, userId);
            return await this.productRepository.update(id, {
                  name: dto.name,
                  description: dto.description,
                  user: {
                        connect: { id: userId }
                  }
            });

    }

    async deleteProduct(id: string, userId: string) : Promise<void> {
            await this.findProductById(id, userId);
            await this.productRepository.remove(id, userId);
    }


   
}
