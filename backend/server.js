import express from 'express'
import UserRouter from './src/routes/user.routes.js'
import AuthRouter from './src/routes/AuthRouter.js'
import ProductRouter from './src/routes/product.routes.js'
import CustomerRouter from './src/routes/customer.routes.js'
import TransactionRouter from './src/routes/TransactionRoutes.js'
import MovementRouter from './src/routes/ProductMovementRoutes.js'
import MetricsRouter  from './src/routes/MetricsRoutes.js'
import exceptionHandler from './src/middleware/ExceptionHandler.js'
import { swaggerUi, swaggerDocument } from "./config/swagger.js";
import cors from 'cors'
const app = express()
const port = 3333
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,

}));
app.use(express.json())

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/users', UserRouter);
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/customers', CustomerRouter);
app.use('/transactions', TransactionRouter);
app.use('/movements', MovementRouter);
app.use('/metrics', MetricsRouter);
app.use(exceptionHandler);
app.listen(port, () => {
    console.log(`Server running`)
})
