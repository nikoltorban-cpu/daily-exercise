const bcrypt = require('bcrypt');

const {
  getUsers,
  saveUsers
} = require('../models/usersModel');

const register = async (req, res) => {

  try {

    const {
      name,
      last_name,
      email,
      username,
      password
    } = req.body;

    if (
      !name ||
      !last_name ||
      !email ||
      !username ||
      !password
    ) {

      return res.status(400).json({
        message:'All fields required'
      });

    }

    const users = await getUsers();

    const exists = users.find(
      user =>
        user.username === username
    );

    if (exists) {

      return res.status(400).json({
        message:'Username already exists'
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      name,
      last_name,
      email,
      username,
      password: hashedPassword
    };

    users.push(newUser);

    await saveUsers(users);

    res.status(201).json({
      message:'User registered successfully'
    });

  } catch (error) {

    res.status(500).json({
      message:error.message
    });

  }
};

const login = async (req, res) => {

  try {

    const {
      username,
      password
    } = req.body;

    const users = await getUsers();

    const user = users.find(
      user => user.username === username
    );

    if (!user) {

      return res.status(404).json({
        message:'User not found'
      });

    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!validPassword) {

      return res.status(401).json({
        message:'Incorrect password'
      });

    }

    res.json({
      message:'Login successful'
    });

  } catch (error) {

    res.status(500).json({
      message:error.message
    });

  }
};

const getAllUsers = async (req, res) => {

  const users = await getUsers();

  res.json(users);
};

const getUserById = async (req, res) => {

  const users = await getUsers();

  const user = users.find(
    user =>
      user.id === parseInt(req.params.id)
  );

  if (!user) {

    return res.status(404).json({
      message:'User not found'
    });

  }

  res.json(user);
};

const updateUser = async (req, res) => {

  const users = await getUsers();

  const index = users.findIndex(
    user =>
      user.id === parseInt(req.params.id)
  );

  if (index === -1) {

    return res.status(404).json({
      message:'User not found'
    });

  }

  users[index] = {
    ...users[index],
    ...req.body
  };

  await saveUsers(users);

  res.json(users[index]);
};

module.exports = {
  register,
  login,
  getAllUsers,
  getUserById,
  updateUser
};