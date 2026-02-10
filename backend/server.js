import express from 'express'
import UserRouter from './src/routes/UserRoutes.js'
import AuthRouter from './src/routes/AuthRouter.js'
const app = express()
const port = 3333
app.use(express.json())
app.use('/users', UserRouter);
app.use('/auth', AuthRouter);
app.listen(port, () => {
    console.log(`Server running`)
})
