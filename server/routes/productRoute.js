const express = require("express");
const { isAuthenticatedUser,atuhorizeRoles } = require("../controllers/auth");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productCtrl");
const router = express.Router();

//Admin routes
router.route("/product/new").post(isAuthenticatedUser, createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser,atuhorizeRoles('admin'),updateProduct)
  .delete(isAuthenticatedUser,atuhorizeRoles('admin'),deleteProduct)
  .get(getProductDetails);

router.route("/products").get(getAllProducts);

router.route('/review').put(isAuthenticatedUser,createProductReview)

router.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview)

module.exports = router;

// 4:06 min 