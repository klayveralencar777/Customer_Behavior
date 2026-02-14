import { prisma } from "../database/prisma.js";
export class MetricsRepository {

    constructor() { }

    async countCustomers(userId) {
        return await prisma.customer.count({
            where: { userId }
        });
    }

    async countTransactions(userId) {
        return await prisma.transaction.count({
            where: { userId }
        });
    }

    async findTotalSales(userId) {
        const result = await prisma.transaction.aggregate({
            where: { userId, type: "VENDA" },
            _sum: { totalAmount: true }
        });
        return result._sum.totalAmount || 0;
    }

    async findTotalPurchase(userId) {
        const result = await prisma.transaction.aggregate({
            where: { userId, type: "COMPRA" },
            _sum: { totalAmount: true }
        });
        return result._sum.totalAmount || 0;

    }

    async findProfit(userId) {
        const [sales, purchases] = await Promise.all([
            this.findTotalSales(userId),
            this.findTotalPurchase(userId),
        ]);

        return sales - purchases;
    }


    async getAverageTicket(userId) {
        const result = await prisma.transaction.aggregate({
            where: { userId, type: "VENDA" },
            _avg: { totalAmount: true }
        });

        return result._avg.totalAmount || 0;
    }

    async topProduct(userId) {
        const result = await prisma.productMovement.groupBy({
            by: ["productId"],
            where: { userId, type: "SAIDA" },
            _sum: { quantity: true },
            orderBy: { _sum: { quantity: "desc" }
            }, take: 1
     });

        if (!result.length) return null;

        return {
            productId: result[0].productId,
            quantitySold: result[0]._sum.quantity
        };
    }

}





