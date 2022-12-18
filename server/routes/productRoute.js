const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productCtrl");
const router = express.Router();

//Admin routes
router.route("/product/new").post(createProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(deleteProduct)
  .get(getProductDetails);

router.route("/products").get(getAllProducts);

module.exports = router;
