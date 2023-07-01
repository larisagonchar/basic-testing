import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 3, b: 2, action: null, expected: null },
  { a: 3, b: null, action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should return $expected when $a $action $b',
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({
        a,
        b,
        action,
      });

      expect(result).toBe(expected);
    },
  );
});
