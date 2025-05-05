import checkStudentKnowledge from '../utils/studentKnowledgeCheckerUtil';

describe('Student Knowledge Checker', () => {
  test('returns true when all answers match', () => {
    const student = { q1: 'a', q2: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).toBe(true);
  });

  test('returns false when answers differ', () => {
    const student = { q1: 'a', q2: 'c' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).toBe(false);
  });

  test('returns false when question keys differ', () => {
    const student = { q1: 'a' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).toBe(false);
  });

  test('returns false when question order is different', () => {
    const student = { q2: 'b', q1: 'a' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).toBe(false);
  });
});
