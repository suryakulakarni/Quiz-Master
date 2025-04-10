const db = require('./db');

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('✅ Database connected! Test result:', rows);
  } catch (err) {
    console.error('❌ Database connection failed:', err.message);
  } finally {
    process.exit();
  }
}

testConnection();
