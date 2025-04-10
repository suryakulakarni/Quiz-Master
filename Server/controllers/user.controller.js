const db = require('../config/db');

exports.createUser = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;

    const [result] = await db.query(
      `INSERT INTO users (name, email, phone, password, role)
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone, password, role || 'user']
    );

    res.status(201).json({ message: 'User created!', userId: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
