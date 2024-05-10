// routes/index.js
const express = require('express');
const router = express.Router();

// Import controller
const indexController = require('../controllers/controller');

// Define routes using controller methods
router.post('/', indexController.getHome);
router.get('/about', indexController.getAbout);

module.exports = router;
