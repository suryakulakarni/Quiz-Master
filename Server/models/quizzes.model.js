const db = require('../db');

async function createQuiz(quiz) {
  const sql = `
    INSERT INTO quizzes (
      title, description, num_questions, start_time, end_time,
      duration_minutes, per_question_time, autograde, shuffle_questions,
      shuffle_options, full_screen_required, max_tab_switches, created_by
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    quiz.title,
    quiz.description,
    quiz.num_questions,
    quiz.start_time,
    quiz.end_time,
    quiz.duration_minutes,
    quiz.per_question_time,
    quiz.autograde,
    quiz.shuffle_questions,
    quiz.shuffle_options,
    quiz.full_screen_required,
    quiz.max_tab_switches,
    quiz.created_by
  ]);
  return result.insertId;
}

module.exports = {
  createQuiz
};
