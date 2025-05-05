import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils';

describe('Array Utils', () => {
  test('findMax returns maximum value', () => {
    expect(findMax([1, 5, 3])).toBe(5);
  });

  test('findMax throws if input is not array', () => {
    expect(() => findMax(5)).toThrow('Input must be an array');
  });

  test('findMin returns minimum value', () => {
    expect(findMin([1, -2, 3])).toBe(-2);
  });

  test('findMin throws if input is not array', () => {
    expect(() => findMin('hello')).toThrow('Input must be an array');
  });

  test('removeDuplicates removes duplicates', () => {
    expect(removeDuplicates([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('removeDuplicates throws if input is not array', () => {
    expect(() => removeDuplicates(null)).toThrow('Input must be an array');
  });
});
