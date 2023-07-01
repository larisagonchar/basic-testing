import {
  resolveValue,
  throwError,
  throwCustomError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    expect(resolveValue(12)).resolves.toBe(12);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError('message')).toThrow('message');
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(
      'This is my awesome custom error!',
    );
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    expect(rejectCustomError()).rejects.toThrow(
      'This is my awesome custom error!',
    );
  });
});
