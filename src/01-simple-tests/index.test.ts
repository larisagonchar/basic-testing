import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({
      a: 10,
      b: 20,
      action: Action.Add,
    });

    expect(result).toBe(30);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({
      a: 20,
      b: 10,
      action: Action.Subtract,
    });

    expect(result).toBe(10);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({
      a: 20,
      b: 10,
      action: Action.Multiply,
    });

    expect(result).toBe(200);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({
      a: 20,
      b: 10,
      action: Action.Divide,
    });

    expect(result).toBe(2);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 10,
      b: 2,
      action: Action.Exponentiate,
    });

    expect(result).toBe(100);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({
      a: 10,
      b: 2,
      action: null,
    });

    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({
      a: 'string',
      b: 10,
      action: Action.Exponentiate,
    });

    expect(result).toBeNull();
  });
});
