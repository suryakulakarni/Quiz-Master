const db = require('../db');

async function recordScore(entry) {
  const sql = `
    INSERT INTO leaderboard (quiz_id, user_id, score, tab_switch_count)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    entry.quiz_id,
    entry.user_id,
    entry.score,
    entry.tab_switch_count || 0
  ]);
  return result.insertId;
}

async function getLeaderboardForQuiz(quizId) {
  const [rows] = await db.query(`
    SELECT u.name, l.score, l.attempted_at
    FROM leaderboard l
    JOIN users u ON l.user_id = u.id
    WHERE l.quiz_id = ?
    ORDER BY l.score DESC
  `, [quizId]);

  return rows;
}

module.exports = {
  recordScore,
  getLeaderboardForQuiz
};
