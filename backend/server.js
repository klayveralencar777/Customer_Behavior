import express from 'express'
import UserRouter from './src/routes/UserRoutes.js'
import AuthRouter from './src/routes/AuthRouter.js'
import ProductRouter from './src/routes/ProductRoutes.js'
import CustomerRouter from './src/routes/CustomerRoutes.js'
import TransactionRouter from './src/routes/TransactionRoutes.js'
import MovementRouter from './src/routes/ProductMovementRoutes.js'
import MetricsRouter  from './src/routes/MetricsRoutes.js'
const app = express()
const port = 3333
app.use(express.json())
app.use('/users', UserRouter);
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);
app.use('/customers', CustomerRouter);
app.use('/transactions', TransactionRouter);
app.use('/movements', MovementRouter);
app.use('/metrics', MetricsRouter);
app.listen(port, () => {
    console.log(`Server running`)
})
