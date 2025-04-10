const db = require('../config/db');

const User = {
    create: (username, password, email, role, callback) => {
        const sql = 'INSERT INTO users (username, password, email, role) VALUES (?, ?, ?, ?)';
        db.query(sql, [username, password, email, role], callback);
    },
    findByUsername: (username, callback) => {
        const sql = 'SELECT * FROM users WHERE username = ?';
        db.query(sql, [username], callback);
    },
    findAll: (callback) => {
        const sql = 'SELECT * FROM users';
        db.query(sql, callback);
    },
    findById: (id, callback) => {
        const sql = 'SELECT * FROM users WHERE id = ?';
        db.query(sql, [id], callback);
    },
    update: (id, username, email, role, callback) => {
        const sql = 'UPDATE users SET username = ?, email = ?, role = ? WHERE id = ?';
        db.query(sql, [username, email, role, id], callback);
    },
    delete: (id, callback) => {
        const sql = 'DELETE FROM users WHERE id = ?';
        db.query(sql, [id], callback);
    }
};

module.exports = User;