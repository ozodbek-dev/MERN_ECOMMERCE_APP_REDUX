const { registerUser, loginUser,logoutUser, forgotPassword } = require('../controllers/userController');

const router = require('express').Router();

// Register, Login and Logout
router.route('/register').post(registerUser)
router.route('/login').post(loginUser);
module.exports = router;
router.route('/logout').get(logoutUser);

router.route('/password/forgot').post(forgotPassword)