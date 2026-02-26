const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

router.post('/contact', emailController.sendContactEmail);
router.post('/ticket', emailController.sendTicketEmail);

module.exports = router;
