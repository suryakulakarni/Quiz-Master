const mysql = require('mysql2'); // Not mysql2/promise!
require('dotenv').config(); // Optional if using .env

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'MySql@3212',
  database: 'quiz',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});



//Added
// Export the promise-based version
module.exports = pool.promise();
