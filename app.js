const express = require('express');
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
require('dotenv').config();

const PORT = 3000;

app.use(express.json());
app.use(cors());

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
