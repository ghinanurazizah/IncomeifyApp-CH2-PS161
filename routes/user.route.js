const express = require('express');
const router = express.Router();
const getUserData = require('../controllers/user.controller');
const authenticateToken = require('../middleware/authenticate');

router.get('/user', authenticateToken, getUserData);

module.exports = router;
