import { add, subtract, multiply, divide } from '../utils/mathUtils';

describe('Math Utils', () => {
  test('add adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtract subtracts second number from first', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiply multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('divide divides first number by second', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divide throws on division by zero', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });
});
