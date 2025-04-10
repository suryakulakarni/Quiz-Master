const db = require('../db');

async function createUser(user) {
  const sql = `
    INSERT INTO users (name, email, phone, password_hash, role, is_approved)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    user.name,
    user.email,
    user.phone,
    user.password_hash,
    user.role || 'user',
    user.is_approved || false
  ]);
  return result.insertId;
}

async function getAllUsers() {
  const [rows] = await db.query('SELECT id, name, email, phone, role, is_approved FROM users');
  return rows;
}

module.exports = {
  createUser,
  getAllUsers
};
