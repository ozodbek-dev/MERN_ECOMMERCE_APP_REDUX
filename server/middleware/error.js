const ErrorHandler = require("../utils/error_handler");
const mongodbIdError = require("../utils/mongodb_id_error_handler");
const resHandler = require("../utils/response_handler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error"; 

  //Handling MongoDB Id error;
  if (mongodbIdError(err))err = mongodbIdError(err);
  //mongoose dublicate error
  if(err.code === 11000){
  const msg = `Dublicate  Entered`
  err = new ErrorHandler(msg,400);
  }
  //Wrong Jwt error
  if(err.name === "CateError"){
    const msg = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(msg,400);
  }

  resHandler(res,err.statusCode,{success:false,msg:err.message})
  
};
