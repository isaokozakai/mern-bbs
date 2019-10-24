const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

// User Model
const User = require('../../models/User');

// @route  POST api/auth
// @desc   Auth user
// @access Public
router.post('/api/auth', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Please enter all fields');
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).send('User does not exist');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send('Invalid credentials')
  }
  jwt.sign(
    { id: user.id },
    config.get('jwtSecret'),
    { expiresIn: 3600 },
    (err, token) => {
      if (err) {
        throw err;
      }
      res.send({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      });
    }
  )
});

// @route  GET api/auth/user
// @desc   Get user data
// @access Private
router.get('/api/auth/user', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.send({
    id: user.id,
    name: user.name,
    email: user.email,
    registerDate: user.registerDate
  });
});

module.exports = router;