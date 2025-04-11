// const createTables = async () => {
//     try {
//       await pool.query(`
//         CREATE TABLE IF NOT EXISTS users_model (
//           id INT AUTO_INCREMENT PRIMARY KEY,
//           name VARCHAR(100),
//           email VARCHAR(100) UNIQUE,
//           phone VARCHAR(15),
//           password VARCHAR(255),
//           role ENUM('user', 'admin') DEFAULT 'user',
//           is_approved BOOLEAN DEFAULT false
//         );
//       `);
  
//       await pool.query(`
//         CREATE TABLE IF NOT EXISTS quizes (
//           id INT AUTO_INCREMENT PRIMARY KEY,
//           title VARCHAR(255),
//           start_time DATETIME,
//           end_time DATETIME,
//           duration INT,
//           isProctored BOOLEAN DEFAULT false,
//           autoGrade BOOLEAN DEFAULT true
//         );
//       `);
  
//       await pool.query(`
//         CREATE TABLE IF NOT EXISTS quizquestions (
//           id INT AUTO_INCREMENT PRIMARY KEY,
//           quiz_id INT,
//           question_text TEXT,
//           options JSON,
//           correct_answer VARCHAR(255),
//           marks INT,
//           FOREIGN KEY (quiz_id) REFERENCES quizes(id) ON DELETE CASCADE
//         );
//       `);
  
//       await pool.query(`
//         CREATE TABLE IF NOT EXISTS leaderboard (
//           id INT AUTO_INCREMENT PRIMARY KEY,
//           user_id INT,
//           quiz_id INT,
//           total_score INT,
//           quizzes_taken INT,
//           FOREIGN KEY (user_id) REFERENCES users_model(id) ON DELETE CASCADE,
//           FOREIGN KEY (quiz_id) REFERENCES quizes(id) ON DELETE CASCADE
//         );
//       `);
  
//       console.log("Tables created successfully.");
//     } catch (error) {
//       console.error("Error creating tables:", error);
//     }
//   };
  

const pool = require('../config/db'); // adjust path if needed

const createTables = async () => {
  // USERS TABLE
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users_model (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        phone VARCHAR(15),
        password VARCHAR(255),
        role ENUM('user', 'admin') DEFAULT 'user',
        is_approved BOOLEAN DEFAULT false
      );
    `);
    console.log("users_model table created.");
  } catch (error) {
    console.error("Error creating users_model table:", error.message);
  }

  // QUIZZES TABLE
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS quizes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        start_time DATETIME,
        end_time DATETIME,
        duration INT,
        isProctored BOOLEAN DEFAULT false,
        autoGrade BOOLEAN DEFAULT true
      );
    `);
    console.log("quizes table created.");
  } catch (error) {
    console.error("Error creating quizes table:", error.message);
  }

  // QUIZ QUESTIONS TABLE
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS quizquestions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        quiz_id INT,
        question_text TEXT,
        options JSON,
        correct_answer VARCHAR(255),
        marks INT,
        FOREIGN KEY (quiz_id) REFERENCES quizes(id) ON DELETE CASCADE
      );
    `);
    console.log("quizquestions table created.");
  } catch (error) {
    console.error("Error creating quizquestions table:", error.message);
  }

  // LEADERBOARD TABLE
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS leaderboard (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT,
        quiz_id INT,
        total_score INT,
        quizzes_taken INT,
        FOREIGN KEY (user_id) REFERENCES users_model(id) ON DELETE CASCADE,
        FOREIGN KEY (quiz_id) REFERENCES quizes(id) ON DELETE CASCADE
      );
    `);
    console.log("leaderboard table created.");
  } catch (error) {
    console.error("Error creating leaderboard table:", error.message);
  }
};

createTables();
