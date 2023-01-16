const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/error_handler");
const { sendToken } = require("../utils/jwt_token_send");
const resHandler = require("../utils/response_handler");
const crypto = require("crypto");
const cloudinary = require('cloudinary')

const sendEmail = require("../utils/send_email");

//Register User
module.exports.registerUser = catchAsyncErrors(async (req, res, next) => {

  const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
    folder:"avatars",
    width:150,
    crop:"scale"
  })
  const user = await User.create({
    ...req.body,
    avatar: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    },
  });

  const token = user.getJwtToken();

  sendToken(res, 201, user);
});

//Login User
module.exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new ErrorHandler("Please Enter Email & Password! ", 400));

  const user = await User.findOne({ email }).select("+password");


  if (!user)
    return next(
      new ErrorHandler("User do not found. Invalid Email or Password ", 401)
    );

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched)
    return next(new ErrorHandler("Invalid Email or Password ", 401));

  const token = user.getJwtToken();

  sendToken(res, 201, user);
});

//Logout user
module.exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, { expires: new Date(Date.now()), httpOnly: true });

  resHandler(res, 200, {
    success: true,
    msg: "Successful Logged Out!",
  });
});

//forgotPassword
module.exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {

  const user = await User.findOne({ email: req.body.email });

  if (!user) return next(new ErrorHandler("User not found", 404));

  //Get resetPassword token
  const resetToken = user.getResetPasswordToken();

  user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;

  const message = `Your password reset token is: - \n\n ${resetPasswordUrl} \n\n if you  have not requested this email then please ignore it`;

  try {
    await sendEmail({
      to: user.email,
      subject: `Ecommerce Password Recovery`,
      text: message,
    });
    resHandler(res, 200, {
      success: true,
      msg: `Email sent to ${user.email} successfully`,
    });
  } catch (err) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    return next(new ErrorHandler(err.message, 500));
  }
});

//Reset Password
module.exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire:{$gt:Date.now()}
    })
    if(!user){
      return next(new ErrorHandler("Reset Passowrd token is invalid or has been expired", 400))
    }
    user.password = req.body.password
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined;
    await user.save();
    sendToken(res,200,user);
});

//Get User Detail
module.exports.getUserDetail = catchAsyncErrors(async (req,res,next)=>{
  const user = await User.findById(req.user.id)

  resHandler(res,200,{success:true,user})
})

// Update User password;
module.exports.updatePassword = catchAsyncErrors(async (req,res,next)=>{
  const user = await User.findById(req.user.id).select("+password")


  const {oldPassword,newPassword,confirmPassword} =  req.body;


  if(!oldPassword || !newPassword || !confirmPassword)
    return next(new ErrorHandler("You must give correct data"));

  const isPasswordMatched = await user.comparePassword(oldPassword);

  if (!isPasswordMatched)
    return next(new ErrorHandler("Old Password is incorrect!", 400));

if(oldPassword === newPassword) return next(new ErrorHandler("The New Password Must not be same Old password!"))

if(newPassword === confirmPassword){
  user.password = newPassword;
  await user.save();
  sendToken(res,200,user);
}
else return next(new ErrorHandler("Passwords Do not match!",400))


})

// Update User Profile;
module.exports.upadateProfile = catchAsyncErrors(async (req,res,next)=>{
const newUser ={
  name:req.body.name,
  email:req.body.email
}
if(req.body.avatar){
  const user = await User.findById(req.user.id);

  const imageId = user.avatar.public_id;

  await cloudinary.v2.uploader.destroy(imageId);

  const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar,{
    folder:"avatars",
    width:300,
    crop:"scale"
  })

  newUser.avatar = {
    public_id:myCloud.public_id,
    url:myCloud.secure_url
  }
}

await  User.findByIdAndUpdate(req.user.id,newUser,{
  new:true,
  runValidators:true,
  useFindAndModify:false,
})


resHandler(res,200,{success:true,msg:"Profile Updated Successsfully"})
})

//Get All Users (admin)
module.exports.getAllUser = catchAsyncErrors(async (req,res,next)=>{
  const users = await User.find();

  resHandler(res,200,{
    success:true,
    users
  })
})

//Get Single user (admin)
module.exports.getSingleUser = catchAsyncErrors(async (req,res,next)=>{
  const user = await User.findById(req.params.id);
  if(!user){
    return next(new ErrorHandler(`User does not exist with Id:: ${req.params.id}`))
  }

  resHandler(res,200,{
    success:true,
    user
  })

})

// Update User Profile --Admin;
module.exports.upadteUser = catchAsyncErrors(async (req,res,next)=>{
  const newUser ={
    name:req.body.name,
    email:req.body.email,
    role:req.body.role
  }
  //We will add cloudinary later
  
  const user =await  User.findByIdAndUpdate(req.params.id,newUser,{
    new:true,
    runValidators:true,
    useFindAndModify:false,
  })
  
  resHandler(res,200,{success:true,msg:"Profile Updated Successsfully"})
  })
  
  // Delete User --Admin;
module.exports.deleteUser = catchAsyncErrors(async (req,res,next)=>{

  
  const user =await  User.findById(req.params.id)
  if(!user){
    return next(ErrorHandler(`User Does not exist`));
  }

 await user.remove()
  
  resHandler(res,200,{success:true,msg:"Profile Deleted Successsfully"})
  })
  