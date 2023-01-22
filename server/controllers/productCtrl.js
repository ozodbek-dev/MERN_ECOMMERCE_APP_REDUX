const Product = require("../models/productModel.js");
const ErrorHandler = require("../utils/error_handler.js");
const resHandler = require("../utils/response_handler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/api_features_handler.js");
const { query } = require("express");
const cloudinary = require("cloudinary");

// Create Product --> Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "Products",
    });
    imagesLinks.push({
      public_id: result.public_id,
      img_url: result.secure_url,
    });
  }
  req.body.images = imagesLinks;
  req.body.user = req.user._id;

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

  // images start here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.v2.uploader.destroy(product.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "Products",
      });

      
      imagesLinks.push({
        public_id: result.public_id,
        img_url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

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

  for (let i = 0; i < product.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      product.images[i].public_id
    );
  }

  product.remove();
  res.status(200).json({ success: true, msg: "Procuct Deleted successfully!" });
});

//Get all products --> Admin
exports.getAllProductsAdmin = catchAsyncErrors(async (req, res) => {
  const products = await Product.find();

  resHandler(res, 200, {
    success: true,
    products,
  });
});

/////////////////////
//get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) return next(new ErrorHandler("Product Not Found", 404));
  resHandler(res, 200, { success: true, product });
});

//Get all products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;
  const productsCount = await Product.countDocuments();

  const apiFeature = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter();

  let products = await apiFeature.query;

  const filteredProductsCount = products.length;

  apiFeature.paginate(resultPerPage);

  products = await apiFeature.query.clone();
  console.log("this = ", filteredProductsCount);

  resHandler(res, 200, {
    success: true,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  });
});

//Create new Review or Update the review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user_id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);

  const isReviewed = product.reviews.find((rev) => rev.user === req.user._id);

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user === req.user._id) {
        rev.rating = rating;
        rev.comment = comment;
      }
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let sumOfRatings = 0;
  product.reviews.forEach((rev) => {
    sumOfRatings += rev.rating;
  });
  product.rating = sumOfRatings / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  resHandler(res, 200, { success: true });
});

//Get All reviews of a product
exports.getProductReviews = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(ErrorHandler("Product Not found", 404));
  }

  resHandler(res, 200, {
    scucess: true,
    reviews: product.reviews,
  });
});

//Delete Review
exports.deleteReview = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  if (!product) {
    return next(ErrorHandler("Product Not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let sumOfRatings = 0;
  reviews.forEach((rev) => {
    sumOfRatings += rev.rating;
  });
  const rating = sumOfRatings / reviews.length;

  const numOfReviews = reviews.length;

  await product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      rating,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  resHandler(res, 200, {
    scucess: true,
  });
});
