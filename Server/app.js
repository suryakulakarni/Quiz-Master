const express = require('express');
const app = express();
const userRoutes = require('./routes/users.routes');

app.use(express.json()); // parse JSON request bodies
app.use('/api/users', userRoutes); // user routes mounted

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const db = require('./config/db');

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('Database connected! Test result:', rows);
  } catch (err) {
    console.error('Database connection failed:', err.message);
  } finally {
    process.exit();
  }
}

testConnection();