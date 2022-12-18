module.exports = (res,statusCode,jsonContent) =>{
  return res.status(statusCode).json(jsonContent);
}