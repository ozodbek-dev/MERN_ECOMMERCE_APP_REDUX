const express = require('express');
const app = express();

//Route Imports
const productRoute = require('./routes/productRoute');

app.use(express.json())

app.use("/api/v1",productRoute)


module.exports =app; 
