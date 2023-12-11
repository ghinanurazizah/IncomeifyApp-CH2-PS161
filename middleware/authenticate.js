const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  try {
    let token;

    // Check for token in headers
    if (
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer ')
    ) {
      // Remove 'Bearer ' from the beginning of the token
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      console.error('Token missing in headers:', req.headers);
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: Token missing',
      });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        console.error('Error verifying token:', err);
        return res.status(403).json({
          success: false,
          message: 'Forbidden: Invalid token',
        });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.error('Error in authenticateToken middleware:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

module.exports = authenticateToken;
