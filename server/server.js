// Handling UnCaught Exception
require('./utils/unCaughtException_handler.');
require('dotenv').config({path:"server/config/config.env"})
const app = require('./app');
const connectDB = require('./config/db')
const unhandledPromiseRejection = require('./utils/unhandled_promise_rejection')
const cloudinary = require('cloudinary')



//Connecting to DB
connectDB();

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const server = app.listen(process.env.PORT,()=>{
  console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection
unhandledPromiseRejection(server);