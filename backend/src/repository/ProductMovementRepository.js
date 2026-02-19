export class ProductMovementRepository {
    constructor(db) {
        this.db = db;
    }

    async createMany(data) {
        return await this.db.productMovement.createMany({ data });
    }


    async findByProduct(productId, userId) {
        return await this.db.productMovement.findMany({
             where: { productId, userId},
             orderBy: { createdAt: "desc"}
        });

    }

    async findAllMovements(userId) {
        return await this.db.productMovement.findMany({
                where: { userId }
        });
        
    }
}
