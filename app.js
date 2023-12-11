const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
require('dotenv').config();

const PORT = 3000;

app.use(express.json());
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Incomeify Application',
  });
});

// routes
app.use('/auth', authRoutes);
app.use('/api', userRoutes);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is listening at: http://localhost:${PORT}`);
});
