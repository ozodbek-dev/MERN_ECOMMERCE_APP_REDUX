const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error')
const host = require('./utils/default_host')
//Route Imports
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute')

app.use(express.json())

app.use(host,productRouter)
app.use(host,userRouter)

// Middleware for errors
app.use(errorMiddleware);


module.exports =app; 
