const express = require("express");
const { isAuthenticatedUser,atuhorizeRoles } = require("../controllers/auth");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
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

module.exports = router;
