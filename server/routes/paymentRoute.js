const router = require('express').Router();
const { isAuthenticatedUser } = require("../controllers/auth");
const { processPayment, sendStripeApiKey } = require('../controllers/paymentController');
router.route("/payment/process").post(isAuthenticatedUser, processPayment )

router.route("/stripeapikey").get(isAuthenticatedUser,sendStripeApiKey)

module.exports = router;