// Handling UnCaught Exception
require('./utils/unCaughtException_handler.');

require('dotenv').config({path:"server/config/config.env"})
const app = require('./app');
const connectDB = require('./config/db')
const unhandledPromiseRejection = require('./utils/unhandled_promise_rejection')



//Connecting to DB
connectDB();

const server = app.listen(process.env.PORT,()=>{
  console.log(`Server is working on http://localhost:${process.env.PORT}`)
})

// Unhandled Promise Rejection
unhandledPromiseRejection(server);