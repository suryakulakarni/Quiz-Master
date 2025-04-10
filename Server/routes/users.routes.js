const express = require('express');
const router = express.Router();
const userController = require('./../controllers/user.controller');

// POST: Create new user
router.post('/register', userController.createUser);

module.exports = router;
