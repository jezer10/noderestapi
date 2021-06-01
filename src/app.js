const express = require('express')
const app = express();
const cors = require('cors')
const morgan = require('morgan')
const userRouter = require('./routes/user.routes')
const productRouter = require('./routes/product.routes')


app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

app.get('/', (req, res) => res.send('Hello World'))


app.use('/api/v1/users/', userRouter)
app.use('/api/v1/products/', productRouter)
app.use((req, res) => {
    res.status(404).json({ statuscode: 404, description: `path ${req.originalUrl} doesn't exists` })
})



module.exports = app;