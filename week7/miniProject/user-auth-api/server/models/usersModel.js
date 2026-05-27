const fs = require('fs').promises;

const FILE = './users.json';

const getUsers = async () => {

  const data =
    await fs.readFile(FILE, 'utf-8');

  return JSON.parse(data);
};

const saveUsers = async (users) => {

  await fs.writeFile(
    FILE,
    JSON.stringify(users, null, 2)
  );
};

module.exports = {
  getUsers,
  saveUsers
};