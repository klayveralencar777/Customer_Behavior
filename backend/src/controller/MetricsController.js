import { MetricsService } from "../service/MetricsService.js";

export class MetricsController {
    constructor() { this.metricsService = new MetricsService(); }


    async findMetrics(req, res) {
            try {
                const metrics = await this.metricsService.findMetrics(req.user.id);
                return res.status(200).json(metrics);
                
            } catch (error) {
                return res.status(400).json({error: error.message});
                
            }
            
    }
}

