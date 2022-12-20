const Product = require("../models/productModel.js");
const ErrorHandler = require("../utils/error_handler.js");
const resHandler = require("../utils/response_handler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/api_features_handler.js");

// Create Product --> Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

  req.body.user = req.user._id

  const product = await Product.create(req.body);
  resHandler(res, 201, {
    success: true,
    product,
  });
});

//Update Product --> Admin
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Product Not Found", 404));
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  resHandler(res, 200, { success: true, product });
});

//Delete Product --> Admin
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) return next(new ErrorHandler("Product Not Found", 404));
  product.remove();
  res.status(200).json({ success: true, msg: "Procuct Deleted successfully!" });
});

//get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  console.log(req.params.id);
  if (!product) return next(new ErrorHandler("Product Not Found", 404));
  resHandler(res, 200, { success: true, product });
});

//Get all products
exports.getAllProducts = catchAsyncErrors(async (req, res, next) => {
  const productCount = await Product.countDocuments();

  const resultPerPage = 2;

  const apiFeature = new ApiFeatures(Product.find(), req.query)
.search()
.filter()
.paginate(resultPerPage)

  const products = await apiFeature.query;
  resHandler(res, 200, {
    success: true,
    products,
    productCount,
  });
});
