const ErrorHandler = require("./error_handler");

module.exports = (err)=>{
  if(err.name === "CastError"){
    const msg = `Resource not found. Invalid: ${err.path}`
    err = new ErrorHandler(msg,400);
  }
  return err;
}