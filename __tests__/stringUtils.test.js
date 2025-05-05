import { capitalize, reverseString, isPalindrome } from '../utils/stringUtils';

describe('String Utils', () => {
  test('capitalize capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('capitalize throws on non-string input', () => {
    expect(() => capitalize(123)).toThrow('Input must be a string');
  });

  test('reverseString reverses the string', () => {
    expect(reverseString('abc')).toBe('cba');
  });

  test('reverseString throws on non-string input', () => {
    expect(() => reverseString(null)).toThrow('Input must be a string');
  });

  test('isPalindrome returns true for palindrome', () => {
    expect(isPalindrome('madam')).toBe(true);
  });

  test('isPalindrome returns false for non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('isPalindrome throws on non-string input', () => {
    expect(() => isPalindrome({})).toThrow('Input must be a string');
  });
});
