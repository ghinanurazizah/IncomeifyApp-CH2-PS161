const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const prisma = new PrismaClient();

const userRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Email is already registered',
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 8 characters long.',
      });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt,
      },
    });
  } catch (error) {
    console.error('Error in user registration', error);
    return res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const secretKey = process.env.SECRET_KEY;

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    // Check if the user exist
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid Credentials',
      });
    }

    // Check if the password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid Credentials',
      });
    }

    // Generate the JWT token for authentication
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '7d' });

    // Create a session entry
    await prisma.session.create({
      data: {
        userId: user.id,
        token: token,
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
      token: token,
    });
  } catch (error) {
    console.error('Error in user login:', error);
    return res
      .status(500)
      .json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = { userRegister, userLogin };
