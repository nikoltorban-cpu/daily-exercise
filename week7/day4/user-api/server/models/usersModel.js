const db = require('../config/db');

const createUser = async (
  email,
  username,
  first_name,
  last_name,
  hashedPassword
) => {

  const client = await db.connect();

  try {

    await client.query('BEGIN');

    const userResult = await client.query(
      `
      INSERT INTO users
      (email, username, first_name, last_name)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [email, username, first_name, last_name]
    );

    await client.query(
      `
      INSERT INTO hashpwd
      (username, password)
      VALUES ($1, $2)
      `,
      [username, hashedPassword]
    );

    await client.query('COMMIT');

    return userResult.rows[0];

  } catch (error) {

    await client.query('ROLLBACK');
    throw error;

  } finally {

    client.release();

  }
};

const getAllUsers = async () => {

  const result = await db.query(
    'SELECT * FROM users'
  );

  return result.rows;
};

const getUserById = async (id) => {

  const result = await db.query(
    'SELECT * FROM users WHERE id = $1',
    [id]
  );

  return result.rows[0];
};

const updateUser = async (
  id,
  email,
  first_name,
  last_name
) => {

  const result = await db.query(
    `
    UPDATE users
    SET email=$1,
        first_name=$2,
        last_name=$3
    WHERE id=$4
    RETURNING *
    `,
    [email, first_name, last_name, id]
  );

  return result.rows[0];
};

const getPasswordByUsername = async (username) => {

  const result = await db.query(
    `
    SELECT password
    FROM hashpwd
    WHERE username=$1
    `,
    [username]
  );

  return result.rows[0];
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  getPasswordByUsername
};