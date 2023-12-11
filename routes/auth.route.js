const express = require('express');
const router = express.Router();
const {
  userRegister,
  userLogin,
  googleAuth,
  googleAuthCallback,
} = require('../controllers/auth.controller');

router.post('/register', userRegister);
router.post('/login', userLogin);
router.get('/google', googleAuth);
router.get('/google/callback', googleAuthCallback, (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Google OAuth2 authentication successful',
    token: req.oauthToken,
  });
});

module.exports = router;
