const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/error_handler");


//Register User
exports.registerUser = catchAsyncErrors(async (req,res,next)=>{
  const {name, password,email} = req.body;

  const user = await User.create({
    name,email,password,
    avatar:{
      
    }
  })

})