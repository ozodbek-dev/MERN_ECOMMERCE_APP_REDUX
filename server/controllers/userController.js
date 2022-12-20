const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const ErrorHandler = require("../utils/error_handler");
const { sendToken } = require("../utils/jwt_token_send");
const resHandler = require("../utils/response_handler");

const sendEmail = require('../utils/send_email')

//RegisCOOKIE_EXPIREter User
module.exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.create({
    ...req.body,
    avatar: {
      public_id: "Sample Id",
      url: "sample Url",
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

  console.log(user);

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

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `Your password reset token is: - \n\n http://localhost:5000/api/v1/password/reset/${resetToken} \n\n if you  have not requested this email then please ignore it`;

  try {

    await sendEmail({
      to:user.email,
    subject:`Ecommerce Password Recovery`,
    text:message

    })
    resHandler(res,200,{success:true,msg:`Email sent to ${user.email} successfully`} )
    
  } catch (err) {
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined;

    await user.save({validateBeforeSave:false})
  

    return next(new ErrorHandler(err.message,500))
  }
});
