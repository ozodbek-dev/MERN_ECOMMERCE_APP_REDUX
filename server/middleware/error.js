const mongodbIdError = require("../utils/mongodb_id_error_handler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error"; 

  //Handling MongoDB Id error;
  if (mongodbIdError(err)) err = mongodbIdError(err);
  res.status(err.statusCode).json({
    success: false,
    msg: err.message,
  });
};
