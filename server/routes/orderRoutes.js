const router = require("express").Router();
const { isAuthenticatedUser, atuhorizeRoles } = require("../controllers/auth");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderCtrl");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

// --Admin
router
  .route("/or der/:id")
  .get(isAuthenticatedUser, atuhorizeRoles("admin"), getSingleOrder);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, atuhorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, atuhorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, atuhorizeRoles("admin"), deleteOrder);

module.exports = router;

// 4:43 =>Starting Front end;
