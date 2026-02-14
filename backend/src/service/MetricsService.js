
import { MetricsRepository } from "../repository/MetricsRepository.js";

export class MetricsService {
    constructor() { this.metricsRepository = new MetricsRepository(); }

    async findMetrics(userId) { 
            
        const totalCustomers = await this.metricsRepository.countCustomers(userId);
        const totalTransactions = await this.metricsRepository.countTransactions(userId);
        const totalSale = await this.metricsRepository.findTotalSales(userId);
        const totalPurchase = await this.metricsRepository.findTotalPurchase(userId);
        const profit = await this.metricsRepository.findProfit(userId);
        const topProduct = await this.metricsRepository.topProduct(userId);



        return {
            totalCustomers,
            totalTransactions,
            totalSale,
            totalPurchase,
            profit,
            topProduct,
        }

    }

} 