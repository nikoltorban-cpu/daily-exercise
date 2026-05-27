const fs = require('fs').promises;

const FILE_PATH = './tasks.json';

const readTasks = async () => {

  try {

    const data = await fs.readFile(
      FILE_PATH,
      'utf-8'
    );

    return JSON.parse(data);

  } catch (error) {

    throw new Error(
      'Error reading tasks file'
    );

  }
};

const writeTasks = async (tasks) => {

  try {

    await fs.writeFile(
      FILE_PATH,
      JSON.stringify(tasks, null, 2)
    );

  } catch (error) {

    throw new Error(
      'Error writing tasks file'
    );

  }
};

module.exports = {
  readTasks,
  writeTasks
};