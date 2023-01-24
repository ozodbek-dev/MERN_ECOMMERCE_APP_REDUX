const express = require("express");
const { isAuthenticatedUser, atuhorizeRoles } = require("../controllers/auth");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAllProductsAdmin,
} = require("../controllers/productCtrl");
const router = express.Router();

//Admin routes
router.route("/product/new").post(isAuthenticatedUser,atuhorizeRoles("admin"),  createProduct);
router
  .route("/product/:id")
  .put(isAuthenticatedUser, atuhorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, atuhorizeRoles("admin"), deleteProduct)
  .get(getProductDetails);

router.route("/admin/products").get(isAuthenticatedUser, atuhorizeRoles("admin"),getAllProductsAdmin);

/////////////////////
router.route("/products").get(getAllProducts);

router.route("/review").put(isAuthenticatedUser, createProductReview);

router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser,atuhorizeRoles("admin"), deleteReview);

module.exports = router;

// 4:06 min
