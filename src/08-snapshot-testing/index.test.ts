import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  test('should generate linked list from values 1', () => {
    const linkedList = generateLinkedList<string>(['li', 'li']);

    expect(linkedList).toStrictEqual({
      value: 'li',
      next: {
        value: 'li',
        next: {
          value: null,
          next: null,
        },
      },
    });
  });

  test('should generate linked list from values 2', () => {
    const linkedList = generateLinkedList(['li', 'li']);

    expect(linkedList).toMatchSnapshot();
  });
});
