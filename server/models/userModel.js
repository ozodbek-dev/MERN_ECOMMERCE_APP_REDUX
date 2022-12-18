const {Schema,model} = require('mongoose');
const validator = require('validator')
const userSchema = new Schema({
  name:{
    type:String,
    required:[true,"Please Enter Your name!"],
    maxLength:[30,"Name cannot exceed 30 characters"],
    minLength:[4,"Name should have more than 4 characters"]
}, 
email:{
  type:String,
  required:[true, "Please enter your Email"],
  unique:true,
  validator:[validator.isEmail,"Please enter a valid email"]
}, 
password:{
  type:String,
  required:[true,"Please Enter Your Password"],
  minLength:[8,"Password shoutd be greater than 8 characters! "],
  select:false,
}, 
avatar:{
  public_id:{
    type:String,
    required:true,
  },
  url:{
    type:String,
    required:true
  }
},
role:{
  type:String,
  default:"user"
},
resetPasswordToken:String,
resetPasswordExpire: Date, 

}, {timestamps:true})


module.exports = model("User",userSchema)