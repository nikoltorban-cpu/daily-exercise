const bcrypt = require('bcrypt');

const usersModel = require('../models/usersModel');

const register = async (req, res) => {

  try {

    const {
      email,
      username,
      first_name,
      last_name,
      password
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await usersModel.createUser(
      email,
      username,
      first_name,
      last_name,
      hashedPassword
    );

    res.status(201).json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const login = async (req, res) => {

  try {

    const {
      username,
      password
    } = req.body;

    const userPassword =
      await usersModel.getPasswordByUsername(username);

    if (!userPassword) {

      return res.status(404).json({
        message: 'User not found'
      });

    }

    const match = await bcrypt.compare(
      password,
      userPassword.password
    );

    if (!match) {

      return res.status(401).json({
        message: 'Invalid password'
      });

    }

    res.json({
      message: 'Login successful'
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getUsers = async (req, res) => {

  const users = await usersModel.getAllUsers();

  res.json(users);
};

const getUser = async (req, res) => {

  const user =
    await usersModel.getUserById(req.params.id);

  if (!user) {

    return res.status(404).json({
      message: 'User not found'
    });

  }

  res.json(user);
};

const editUser = async (req, res) => {

  const {
    email,
    first_name,
    last_name
  } = req.body;

  const user = await usersModel.updateUser(
    req.params.id,
    email,
    first_name,
    last_name
  );

  res.json(user);
};

module.exports = {
  register,
  login,
  getUsers,
  getUser,
  editUser
};