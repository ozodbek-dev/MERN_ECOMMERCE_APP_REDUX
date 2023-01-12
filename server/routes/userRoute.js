const { isAuthenticatedUser, atuhorizeRoles } = require("../controllers/auth");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserDetail,
  updatePassword,
  upadateProfile,
  getAllUser,
  getSingleUser,
  upadteUser,
  deleteUser,
} = require("../controllers/userController");

const router = require("express").Router();

// Register, Login and Logout
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
module.exports = router;
router.route("/logout").get(logoutUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenticatedUser, getUserDetail);
router.route("/me/update").put(isAuthenticatedUser, upadateProfile);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);

// Admin
router
  .route("/admin/users")
  .get(isAuthenticatedUser, atuhorizeRoles("admin"), getAllUser);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, atuhorizeRoles("admin"), getSingleUser)
  .put(isAuthenticatedUser, atuhorizeRoles("admin"), upadteUser)
  .delete(isAuthenticatedUser, atuhorizeRoles("admin"), deleteUser);

module.exports = router;
