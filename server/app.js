const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const errorMiddleware = require('./middleware/error')
//Route Imports
const productRouter = require('./routes/productRoute');
const userRouter = require('./routes/userRoute')
const orderRouter = require('./routes/orderRoutes')
const cors = require('cors')
const fileUpload = require('express-fileupload')

app.use(cors())
app.use(bodyParser.json({limit:"50mb"}))
app.use(express.json({limit:"50mb"}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true, limit:"50mb"}))
app.use(fileUpload())

app.use("/api/v1",productRouter)
app.use("/api/v1",userRouter)
app.use("/api/v1",orderRouter)

// Middleware for errors 
app.use(errorMiddleware);


module.exports =app; 
