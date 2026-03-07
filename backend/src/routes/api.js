const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');
const paymentController = require('../controllers/paymentController');

router.post('/contact', emailController.sendContactEmail);
router.post('/ticket', emailController.sendTicketEmail);
router.post('/payment-intent', paymentController.createPaymentIntent);
router.post('/payment-confirm', emailController.sendPaymentConfirmation);

module.exports = router;
