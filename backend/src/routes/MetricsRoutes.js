import express from 'express'

import { MetricsController } from '../controller/MetricsController.js';
import { authMiddleware } from '../middleware/AuthMiddleware.js';
const router = express.Router();
const metricsController  = new MetricsController();
router.use(authMiddleware);
router.get('/find', metricsController.findMetrics.bind(metricsController));



export default router;