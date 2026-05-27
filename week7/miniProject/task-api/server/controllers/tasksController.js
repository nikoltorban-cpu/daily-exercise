const {
  readTasks,
  writeTasks
} = require('../models/tasksModel');

const getTasks = async (req, res) => {

  try {

    const tasks = await readTasks();

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const getTask = async (req, res) => {

  try {

    const tasks = await readTasks();

    const task = tasks.find(
      task => task.id === parseInt(req.params.id)
    );

    if (!task) {

      return res.status(404).json({
        message: 'Task not found'
      });

    }

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const createTask = async (req, res) => {

  try {

    const {
      title,
      completed
    } = req.body;

    if (!title) {

      return res.status(400).json({
        message: 'Title is required'
      });

    }

    const tasks = await readTasks();

    const newTask = {
      id: tasks.length + 1,
      title,
      completed: completed || false
    };

    tasks.push(newTask);

    await writeTasks(tasks);

    res.status(201).json(newTask);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const updateTask = async (req, res) => {

  try {

    const {
      title,
      completed
    } = req.body;

    const tasks = await readTasks();

    const taskIndex = tasks.findIndex(
      task => task.id === parseInt(req.params.id)
    );

    if (taskIndex === -1) {

      return res.status(404).json({
        message: 'Task not found'
      });

    }

    if (!title) {

      return res.status(400).json({
        message: 'Title is required'
      });

    }

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      title,
      completed
    };

    await writeTasks(tasks);

    res.json(tasks[taskIndex]);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

const deleteTask = async (req, res) => {

  try {

    const tasks = await readTasks();

    const filteredTasks = tasks.filter(
      task => task.id !== parseInt(req.params.id)
    );

    await writeTasks(filteredTasks);

    res.json({
      message: 'Task deleted'
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
};