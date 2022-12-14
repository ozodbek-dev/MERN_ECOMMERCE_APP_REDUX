require('dotenv').config({path:"server/config/config.env"})
const app = require('./app');
const connectDB = require('./config/db')


//Connecting to DB
connectDB();

app.listen(process.env.PORT,()=>{
  console.log(`Server is working on http://localhost:${process.env.PORT}`)
})