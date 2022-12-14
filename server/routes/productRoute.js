const express = require('express');
const { getAllProducts, createProduct ,updateProduct,deleteProduct} = require('../controllers/productCtrl');
const router = express.Router();



//Admin routes
router.route("/product/new").post(createProduct)
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);

router.route("/products").get(getAllProducts);



module.exports = router;