const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error')
//Route Imports
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute')

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1",productRouter)
app.use("/api/v1",userRouter)

// Middleware for errors
app.use(errorMiddleware);


module.exports =app; 
