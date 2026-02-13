import { ProductMovementService } from "../service/ProductMovementService.js";

export class ProductMovementController {
    constructor() { this.productMovementService = new ProductMovementService(); }

    async findAllMovements(req, res) {
        try {
            const movements = await this.productMovementService.findAllMovements();
            return res.status(200).json(movements);
            
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    }

    async findMovementByProduct(req, res, next) {
        try {
            const movement = await this.productMovementService.findMovementByProduct(req.params.productId, req.user.id);
            return res.status(200).json(movement);
            
        } catch (error) {
            next(error);
            
        }
    }
}