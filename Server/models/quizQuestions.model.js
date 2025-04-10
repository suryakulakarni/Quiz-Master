const db = require('../db');

async function addQuestion(question) {
  const sql = `
    INSERT INTO quiz_questions (
      quiz_id, question_text, option_a, option_b,
      option_c, option_d, correct_option, marks, autograde
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(sql, [
    question.quiz_id,
    question.question_text,
    question.option_a,
    question.option_b,
    question.option_c,
    question.option_d,
    question.correct_option,
    question.marks || 1,
    question.autograde || true
  ]);
  return result.insertId;
}

module.exports = {
  addQuestion
};
