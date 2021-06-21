import traverseObject from './traverseObject';

test('able to traverse valid path', () => {
  const obj = {
    a: {
      b: {
        c: {
          d: 'yay',
        },
      },
    },
  };

  expect(traverseObject(obj, ['a', 'b', 'c', 'd']))
    .toBe('yay');
});

test('return undefined if some property in the chain is not found', () => {
  const obj = {
    a: {
      b: {
        c: {
          d: 'yay',
        },
      },
    },
  };

  expect(traverseObject(obj, ['a', 'x', 'c', 'd']))
    .toBe(undefined);
});
