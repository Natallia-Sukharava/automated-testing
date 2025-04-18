import {
    filterUsersByAge,
    sortUsersByName,
    findUserById,
    isEmailTaken
  } from '../utils/usersListUtils';
  
  describe('User List Utils', () => {
    const users = [
      { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
      { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
      { id: 3, name: 'Charlie', age: 22, email: 'charlie@example.com' }
    ];
  
    describe('filterUsersByAge', () => {
      test('filters users within age range', () => {
        expect(filterUsersByAge(users, 23, 30)).toEqual([
          { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
          { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' }
        ]);
      });
  
      test('includes users exactly at minAge and maxAge', () => {
        expect(filterUsersByAge(users, 22, 25)).toEqual([
          { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
          { id: 3, name: 'Charlie', age: 22, email: 'charlie@example.com' }
        ]);
      });
  
      test('returns all users if minAge = 0 and maxAge = Infinity', () => {
        expect(filterUsersByAge(users, 0, Infinity)).toEqual(users);
      });
  
      test('returns empty array if no users match', () => {
        expect(filterUsersByAge(users, 40, 50)).toEqual([]);
      });
  
      test('returns empty array when input users array is empty', () => {
        expect(filterUsersByAge([], 20, 30)).toEqual([]);
      });
  
      test('ignores users without age field', () => {
        const expandedUsers = [...users, { id: 4, name: 'NoAgeUser' }];
        const result = filterUsersByAge(expandedUsers, 18, 30);
        expect(result.find(u => u.name === 'NoAgeUser')).toBeUndefined();
      });
  
      test('throws if users is not an array', () => {
        expect(() => filterUsersByAge('not array', 20, 30)).toThrow('Users must be an array');
      });
    });
  
    describe('sortUsersByName', () => {
        test('sorts users alphabetically', () => {
            const unsorted = [
              { name: 'Charlie' },
              { name: 'alice' },
              { name: 'Bob' }
            ];
            expect(sortUsersByName(unsorted).map(u => u.name)).toEqual(['alice', 'Bob', 'Charlie']);
          });          
  
      test('sorts users with unicode characters', () => {
        const unicodeUsers = [
          { name: 'Álvaro' },
          { name: 'Aarón' }
        ];
        expect(sortUsersByName(unicodeUsers).map(u => u.name)).toEqual(['Aarón', 'Álvaro']);
      });
  
      test('sorts users with special characters', () => {
        const specialUsers = [
          { name: 'Zoe' },
          { name: '@lex' }
        ];
        expect(sortUsersByName(specialUsers).map(u => u.name)).toEqual(['@lex', 'Zoe']);
      });
  
      test('does not modify original array', () => {
        const original = [...users];
        sortUsersByName(users);
        expect(users).toEqual(original);
      });
  
      test('returns empty array when input is empty', () => {
        expect(sortUsersByName([])).toEqual([]);
      });
  
      test('throws if users is not an array', () => {
        expect(() => sortUsersByName(123)).toThrow('Users must be an array');
      });
    });
  
    describe('findUserById', () => {
      test('finds user by id', () => {
        expect(findUserById(users, 2)).toEqual(users[1]);
      });
  
      test('returns null if user not found', () => {
        expect(findUserById(users, 999)).toBeNull();
      });
  
      test('returns null if id is 0 and not present', () => {
        expect(findUserById(users, 0)).toBeNull();
      });
  
      test('returns null if id is invalid', () => {
        expect(findUserById(users, 'abc')).toBeNull();
        expect(findUserById(users, null)).toBeNull();
      });
  
      test('handles users without id field', () => {
        const mixedUsers = [...users, { name: 'NoIdUser' }];
        expect(findUserById(mixedUsers, 999)).toBeNull();
      });
  
      test('throws if users is not an array', () => {
        expect(() => findUserById('not array', 1)).toThrow('Users must be an array');
      });
    });
  
    describe('isEmailTaken', () => {
      test('returns true if email exists', () => {
        expect(isEmailTaken(users, 'bob@example.com')).toBe(true);
      });
  
      test('returns false if email does not exist', () => {
        expect(isEmailTaken(users, 'nonexistent@example.com')).toBe(false);
      });
  
      test('returns false if email is empty', () => {
        expect(isEmailTaken(users, '')).toBe(false);
      });
  
      test('email check is case sensitive', () => {
        expect(isEmailTaken(users, 'BOB@example.com')).toBe(false);
      });
  
      test('returns false for null or undefined email', () => {
        expect(isEmailTaken(users, null)).toBe(false);
        expect(isEmailTaken(users, undefined)).toBe(false);
      });
  
      test('handles users without email field', () => {
        const mixedUsers = [...users, { id: 4, name: 'NoEmailUser' }];
        expect(isEmailTaken(mixedUsers, 'noemail@example.com')).toBe(false);
      });
  
      test('returns true if email exists multiple times', () => {
        const duplicatedUsers = [...users, { id: 4, name: 'Duplicate', email: 'alice@example.com' }];
        expect(isEmailTaken(duplicatedUsers, 'alice@example.com')).toBe(true);
      });
  
      test('throws if users is not an array', () => {
        expect(() => isEmailTaken(42, 'email@example.com')).toThrow('Users must be an array');
      });
    });
  });
  